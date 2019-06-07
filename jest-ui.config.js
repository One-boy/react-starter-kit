// jest相关配置
module.exports = {
  testRegex: "/*(\\.)e2e\\.js$",
  globalSetup: './puppeteer-setup.js',
  testURL: 'http://localhost:8888',
  preset: 'jest-puppeteer',
  testEnvironment: './puppeteer-environment.js',
  globals: {

  },
}
