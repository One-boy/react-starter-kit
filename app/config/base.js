/**
 * 基础 配置
 */

// 本地开发打开的路径以及端口
const global = window || {}
global.linkUrl = 'http://127.0.0.1:3000/mock/11/kit';
if (process.env.NODE_ENV === 'production') { // 生产环境用不同的接口地址
  global.linkUrl = 'http://127.0.0.1:3000/mock/11/kit';
}

const prefix = global.linkUrl
const suffix = ''
const timeout = 5000

export {
  prefix,
  suffix,
  timeout,
}