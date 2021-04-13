/*
 * @Author: hy
 * @Date: 2019-05-05 17:47:14
 * @Last Modified by: huyu
 * @Last Modified time: 2021-04-13 18:12:57
 */

// 公共头部

import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Modal, message } from 'antd'
import { title } from '@/config/base'
import AJAXUser from '@/api/User'
import styles from './header.module.less'

@withRouter
class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {}
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
      async onOk() {
        // 退出请求
        const reqData = {}
        let data = await AJAXUser.logout(reqData)
        message.success(data.msg || '退出成功')
        _self.props.history.push('/login')
      },
    })
  }
  render() {
    const userInfo = {
      name: 'admin',
    }
    return (
      <header className={styles.header}>
        <Link to="/" className={styles.brand}>
          <span className={styles.logo} />
          <span className={styles.text}>{title}</span>
        </Link>
        <div className={styles.user}>
          <span>{userInfo.name}</span>
          <a
            onClick={this.onLogout}
            title="退出系统"
            className={styles.userLogout}
          >
            退出
          </a>
        </div>
      </header>
    )
  }
}

export default Header
