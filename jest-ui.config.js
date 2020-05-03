
// jest测试ui相关配置

// 存放日志和截图的文件夹
const LOG_DIR = './test_logs'

module.exports = {
  testRegex: "/*(\\.)e2e\\.js$",
  testURL: 'http://localhost:8888',
  preset: 'jest-puppeteer',
  setupFilesAfterEnv: ['./jest-env.js'],
  notify: true,
  reporters: ["default", ["./jest-reporter.js", { LOG_DIR }]],
  globals: {
    LOG_DIR,
  },
}
