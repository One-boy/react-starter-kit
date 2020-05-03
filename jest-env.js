/*
 * @Author: huyu 
 * @Date: 2020-04-29 18:06:53 
 * @Last Modified by: huyu
 * @Last Modified time: 2020-04-30 17:58:08
 */

// jest ui env
// 做一些初始操作和全局配置

import 'regenerator-runtime/runtime'  // 在此引入避免在每个测试文件中引入
const fs = require('fs')

// 存放日志和截图的文件夹，配置在jest-ui.config.js中
const LOG_DIR = global.LOG_DIR
// url前缀
const urlPrefix = 'http://localhost:8888/#'
// 默认超时时间
const timeout = 5000

function checkDir() {
  if (!fs.existsSync(LOG_DIR)) {
    fs.mkdirSync(LOG_DIR)
  }
}
checkDir()

// 全局配置
global.__LOG_DIR__ = LOG_DIR  // 日志目录
global.__URL_PREFIX__ = urlPrefix // url前缀
global.__TIMEOUT__ = timeout // 全局超时时间
jest.setTimeout(120000) // jest总超时时间

// 所有测试文件执行前执行一次，保存一些全局变量
global.beforeAll(async () => {
  // await page.setDefaultTimeout(timeout)
});


