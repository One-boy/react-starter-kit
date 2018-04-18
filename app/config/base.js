

// 本地开发打开的路径以及端口
global.linkUrl = 'http://localhost:9999';
if (process.env.NODE_ENV === 'production') { // 生产环境用不同的接口地址
    global.linkUrl = 'http://localhost:9999';
}

const prefix = global.gconfig.linkUrl
const suffix = ''
const timeout = 6000

export {
    prefix, suffix, timeout,    
}