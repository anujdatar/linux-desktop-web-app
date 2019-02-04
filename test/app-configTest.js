const assert = require('chai').assert
const path = require('path')
const fs = require('fs')
const { updatePackageJson,
  updateDebianConfig,
  updateAppConfig } = require('../src/app-config')

const testConfigFile = path.join(__dirname, '../src/configs/netflix.json')
const targetJsonFile = path.join(__dirname, './test.json')

const testConfig = require(testConfigFile)

const testTargetJson = require(targetJsonFile)

updatePackageJson(targetJsonFile, testConfig, testTargetJson)
updateDebianConfig(targetJsonFile, testConfig, testTargetJson)
updateAppConfig(targetJsonFile, testConfig, testTargetJson)

const editedTestJson = JSON.parse(fs.readFileSync(targetJsonFile))

describe('testPackageUpdate', function() {
  it('genericName should be same', function() {
    assert.equal(editedTestJson.genericName, testConfig.genericName)
  })

  it('section should be same', function() {
    assert.equal(editedTestJson.section, testConfig.section)
  })
  
})