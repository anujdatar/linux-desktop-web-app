const fs = require('fs')
const path = require('path')
// const inquirer = require('inquirer')

const packageFile = path.join(__dirname, '../package.json')
const debConfFile = path.join(__dirname, '../debian-config.json')
const appConfFile = path.join(__dirname, '../', 'app-config.json')

const defaultConf = path.join(__dirname, './configs/default.json')

const packageData = require(packageFile)
const debConfData = require(debConfFile)
const appConfData = require(appConfFile)

const defaultData = require(defaultConf)



// const data = JSON.parse(fs.readFileSync(appConfig))
updatePackageJson(data)
updateDebianConfig(data)
updateAppConfig(data)

console.log(defaultData)

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
