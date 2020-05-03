/*
 * @Author: huyu 
 * @Date: 2020-04-30 10:51:35 
 * @Last Modified by: huyu
 * @Last Modified time: 2020-05-03 10:51:07
 */

// jest-puppeteer配置文件

// ps https://github.com/GoogleChrome/puppeteer/issues/3120


module.exports = {
  launch: {
    executablePath: './.local-chromium/win64-737027/chrome-win/chrome.exe', // chrome执行程序路径
    headless: false, // 无头模式
    defaultViewport: { // 页面窗口高宽
      width: 1200,
      height: 768,
      deviceScaleFactor: 1
    },
    args: [
      '--disable-gpu',
      '--disable-dev-shm-usage',
      '--no-first-run',
      '--no-zygote',
      '--no-sandbox'
    ],
  },
}
