/**
 * 基础 配置
 */
/* eslint  no-undef:0 */

// 本地开发打开的路径以及端口
let httpUrl = 'http://127.0.0.1:8080/data'

// 启用Mock
let EnableMock = true

// 生产环境用不同的接口地址
if (process.env.NODE_ENV === 'production') {
  httpUrl = 'http://127.0.0.1:8080/data'
  EnableMock = false
}

// 标题
const title = '中后台管理系统'
// 请求url前缀
const prefix = httpUrl
// 请求url后缀
const suffix = '.json'
// 超时时间
const timeout = 100000

// 左侧导航配置
const menusData = [
  {
    navName: '列表页',
    navKey: '/list',
    navIcon: 'desk',
    children: [
      {
        navName: '基础列表1',
        navKey: '/list/example1',
        navIcon: 'desk',
      },
      {
        navName: '基础列表2',
        navKey: '/list/example2',
        navIcon: 'module',
      },
    ],
  },
  {
    navName: '独立菜单',
    navKey: '/single',
    navIcon: 'desk',
  },
  {
    navName: 'WebWorkers',
    navKey: '/worker',
    navIcon: 'desk',
  },
]

export { prefix, suffix, timeout, title, menusData, EnableMock }
