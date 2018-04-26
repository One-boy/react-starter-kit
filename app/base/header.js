/**
 * 公共头部
 */

import React, { Component } from 'react'
import {
  Link, withRouter,
} from 'react-router-dom'
import { Modal, message } from 'antd'
import { title } from '@config/base'
import { httpLogout } from '@api/login'

@withRouter
export default class home extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  /**
   * @description 点击退出
   * @memberof home
   */
  onLogout = () => {
    const _self = this
    Modal.confirm({
      title: '提示',
      content: '确认退出登录吗？',
      onOk() {
        // 退出请求
        const reqData = {}
        httpLogout(reqData, (res) => {
          console.log(res)
          _self.props.history.push('/login')
        }, (error) => {
          message.error(error.message || error.msg || '')
          _self.props.history.push('/login')
        })
      }
    })
  }
  render() {
    const userInfo = {
      name: 'admin'
    }
    return (
      <header className="main-header">
        <Link to="/" className="header-brand">
          <span className="logo" />
          <span className="brand-text">{title}</span>
        </Link>
        <div className="header-user">
          <span className="header-user-name">{userInfo.name}</span>
          <a onClick={this.onLogout} title="退出系统" className="header-user-logout">退出</a>
        </div>
      </header>
    )
  }
}