/**
 * 基础 配置
 */
/* eslint  no-undef:0 */

const global = window || {}

// 本地开发打开的路径以及端口
global.linkUrl = 'http://127.0.0.1:3000/mock/11/kit'

// 生产环境用不同的接口地址
if (process.env.NODE_ENV === 'production') {
  global.linkUrl = 'http://127.0.0.1:3000/mock/11/kit'
}

// 标题
const title = '后台管理'
// 请求url前缀
const prefix = global.linkUrl
// 请求url后缀
const suffix = ''
// 超时时间
const timeout = 5000


// 左侧导航配置
const nav = [
  {
    navName: '基础应用',
    navKey: '/bfyy',
    navIcon: 'desk',
    children: [
      {
        navName: '基础1',
        navKey: '/bfyy/cmzgl',
        navIcon: 'desk',
      },
      {
        navName: '基础2',
        navKey: '/bfyy/cbhk',
        navIcon: 'module',
      },
      {
        navName: '基础3',
        navKey: '/bfyy/dtlw',
        navIcon: 'module',
      },
      {
        navName: '基础4',
        navKey: '/bfyy/twjm',
        navIcon: 'module',
      },
      {
        navName: '基础5',
        navKey: '/bfyy/rcg',
        navIcon: 'module',
      },
      {
        navName: '基础6',
        navKey: '/bfyy/qtbb',
        navIcon: 'module',
      },

    ],
  },
  {
    navName: '扩展应用',
    navKey: '/bjyy',
    navIcon: 'desk',
    children: [
      {
        navName: '扩展1',
        navKey: '/bjyy/dlxk',
        navIcon: 'module',
      },
      {
        navName: '扩展2',
        navKey: '/bjyy/dkwl',
        navIcon: 'module',
      },
    ]
  },
]
export {
  prefix,
  suffix,
  timeout,
  title,
  nav,
}