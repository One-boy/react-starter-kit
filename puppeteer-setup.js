// puppeteer设置

import '@babel/polyfill'
const chalk = require('chalk')
const puppeteer = require('puppeteer')
const mkdirp = require('mkdirp')
const path = require('path')
const fs = require('fs')
const os = require('os')

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup')
module.exports = async function () {
  console.log(chalk.green('Setup Puppeteer'))
  const browser = await puppeteer.launch({
    headless: true,
  })
  // This global is not available inside tests but only in global teardown
  global.__BROWSER_GLOBAL__ = browser

  // use the file system to expose the wsEndpoint for TestEnvironments
  mkdirp.sync(DIR)
  fs.writeFileSync(path.join(DIR, 'wsEndpoint'), browser.wsEndpoint())

}