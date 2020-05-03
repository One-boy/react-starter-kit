/*
 * @Author: huyu 
 * @Date: 2019-06-07 17:26:38 
 * @Last Modified by: huyu
 * @Last Modified time: 2020-05-03 11:22:28
 */

// 登录页测试

import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, mount, render } from 'enzyme'
// 引入polyfill，不然async await无法用，不知道为啥，babel-jest插件没起作用？
import '@babel/polyfill'
import Login from './index'

Enzyme.configure({ adapter: new Adapter() })

describe('Login component test', () => {
  it('should have h2 title', () => {
    const wrapper = mount(<Login />)
    expect(wrapper.contains(<h2>登录</h2>)).toBe(true)
  })

  it('should not have h2 title', () => {
    // shallow 浅渲染，不会渲染子组件
    expect(shallow(<Login />).contains(<h2>登录</h2>)).toBe(false)
  })
})