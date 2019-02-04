const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')

const packageFile = path.join(__dirname, '../package.json')
const debConfFile = path.join(__dirname, '../debian-config.json')
const appConfFile = path.join(__dirname, '../app-config.json')

const packageData = require(packageFile)
const debConfData = require(debConfFile)
const appConfData = require(appConfFile)

// get all config file names
const configDir = path.join(__dirname, '/configs')
let configFiles = fs.readdirSync(configDir)
// console.log(configFiles)
configFiles.forEach(file => {
  if (path.extname(file) != '.json'
    || file == 'default.json') {
      configFiles = configFiles.filter(item => item != file)
    }
})

configMenuPrompt(configFiles)

// use inquirer to prompt app selection
function configMenuPrompt (filesNames) {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'App',
        message: 'Which config file would you like to use for the build?',
        choices: filesNames
      }
    ])
    .then(answers => {
      // console.log(JSON.stringify(answers, null, 2))
      const appConfig = path.join(__dirname, '/configs/', answers.App)
      console.log(appConfig)
      const data = JSON.parse(fs.readFileSync(appConfig))
      updatePackageJson(packageFile, packageData, data)
      updateDebianConfig(debConfFile, debConfData, data)
      updateAppConfig(appConfFile, appConfData, data)
    })
}

function updatePackageJson (fileName, originalData, newData) {
  originalData.name = newData.name
  originalData.productName = newData.productName
  originalData.description = newData.description
  originalData.productDescription = newData.productDescription
  originalData.scripts = newData.scripts
  originalData.keywords = newData.keywords

  fs.writeFileSync(fileName, JSON.stringify(originalData, null, 2))
}

function updateDebianConfig (fileName, originalData, newData) {  
  originalData.genericName = newData.genericName
  originalData.section = newData.section
  originalData.icon = newData.icon
  originalData.categories = newData.categories

  fs.writeFileSync(fileName, JSON.stringify(originalData, null, 2))
}

function updateAppConfig (fileName, originalData, newData) {  
  originalData.webLink = newData.webLink
  originalData.appIcon = newData.icon

  fs.writeFileSync(fileName, JSON.stringify(originalData, null, 2))
}

module.exports = {
  updatePackageJson,
  updateDebianConfig,
  updateAppConfig
}
