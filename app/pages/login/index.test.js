/*
 * @Author: huyu
 * @Date: 2019-06-07 17:26:38
 * @Last Modified by: huyu
 * @Last Modified time: 2021-04-14 20:20:20
 */

// 登录页测试

import React from 'react'
import { shallow, mount, render } from 'enzyme'
import Login from './index'

describe('Login component test', () => {
  it('should have h2 title', () => {
    // 下面会报错，目前（20210414）enzyme还不支持react17，需要等enzyme-adapter-react-17出来
    // 不过可以使用非官方的：https://github.com/wojtekmaj/enzyme-adapter-react-17
    const wrapper = mount(<Login />)
    expect(wrapper.contains(<h2>登录</h2>)).toBe(true)
  })

  it('should not have h2 title', () => {
    // shallow 浅渲染，不会渲染子组件
    expect(shallow(<Login />).contains(<h2>登录</h2>)).toBe(false)
  })
})
