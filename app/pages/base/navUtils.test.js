// 测试nav工具

import { getOpenKeys } from './navUtils'

const menuData = [
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
]

const props = { location: { pathname: '/single' } }
const props2 = { location: { pathname: '/list/example1' } }

const openKey1 = getOpenKeys(props, menuData)
const openKey2 = getOpenKeys(props2, menuData)

describe('test getOpenKeys', () => {
  it('menuData1', () => {
    expect(openKey1).toEqual([
      '/single'
    ])
  })
  it('menuData2', () => {
    expect(openKey2).toEqual([
      '/list'
    ])
  })
})