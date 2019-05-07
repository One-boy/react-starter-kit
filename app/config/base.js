/**
 * 基础 配置
 */
/* eslint  no-undef:0 */


// 本地开发打开的路径以及端口
let httpUrl = 'http://41.196.99.48:8080/data'

// 启用Mock
let EnableMock = true

// 生产环境用不同的接口地址
if (process.env.NODE_ENV === 'production') {
  httpUrl = 'http://41.196.99.48:8080/data'
  EnableMock = false
}

// 标题
const title = '后台管理'
// 请求url前缀
const prefix = httpUrl
// 请求url后缀
const suffix = '.json'
// 超时时间
const timeout = 10000


// 左侧导航配置
const nav = [
  {
    navName: '基础应用',
    navKey: '/basePage',
    navIcon: 'desk',
    children: [
      {
        navName: '基础1',
        navKey: '/basePage/page1',
        navIcon: 'desk',
      },
      {
        navName: '基础2',
        navKey: '/basePage/page2',
        navIcon: 'module',
      },
      {
        navName: '基础3',
        navKey: '/basePage/page3',
        navIcon: 'module',
      },
      {
        navName: '基础4',
        navKey: '/basePage/page4',
        navIcon: 'module',
      },
      {
        navName: '基础5',
        navKey: '/basePage/page5',
        navIcon: 'module',
      },
      {
        navName: '基础6',
        navKey: '/basePage/page6',
        navIcon: 'module',
      },

    ],
  },
  {
    navName: '扩展应用',
    navKey: '/extPage',
    navIcon: 'desk',
    children: [
      {
        navName: '扩展1',
        navKey: '/extPage/page1',
        navIcon: 'module',
      },
      {
        navName: '扩展2',
        navKey: '/extPage/page2',
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
  EnableMock,
}