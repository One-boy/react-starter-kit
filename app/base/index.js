/**
 * 公共包裹，登录后的页面，都有一个公共的头部和左侧导航栏
 */
/* eslint  react/prop-types:0 */
import React, { Component } from 'react'
import Transition from '@components/transition'
import Header from './header'
import Nav from './nav'

export default class home extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="main-wrap">
        <Header />
        <div className="main-body">
          <Nav />
          <div className="main-body-content">
            <Transition >
              {this.props.children || '无children'}
            </Transition>
          </div>
        </div>
      </div>
    )
  }
}
