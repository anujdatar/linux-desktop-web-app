const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')

const packageFile = path.join(__dirname, '../package.json')
const debConfFile = path.join(__dirname, '../debian-config.json')
const appConfFile = path.join(__dirname, '../', 'app-config.json')

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
      updatePackageJson(data)
      updateDebianConfig(data)
      updateAppConfig(data)
    })
}

function updatePackageJson (data) {
  packageData.name = data.name
  packageData.productName = data.productName
  packageData.description = data.description
  packageData.productDescription = data.productDescription
  packageData.scripts = data.scripts
  packageData.keywords = data.keywords

  fs.writeFileSync(packageFile, JSON.stringify(packageData, null, 2))
}

function updateDebianConfig (data) {  
  debConfData.genericName = data.genericName
  debConfData.section = data.section
  debConfData.icon = data.icon
  debConfData.categories = data.categories

  fs.writeFileSync(debConfFile, JSON.stringify(debConfData, null, 2))
}

function updateAppConfig (data) {  
  appConfData.webLink = data.webLink

  fs.writeFileSync(appConfFile, JSON.stringify(appConfData, null, 2))
}
