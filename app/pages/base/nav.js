/*
 * @Author: hy 
 * @Date: 2019-05-05 17:47:31 
 * @Last Modified by:   hy 
 * @Last Modified time: 2019-05-05 17:47:31 
 */

// 左侧导航

import React, { Component } from 'react'
import { Menu } from 'antd'
import { menusData } from '@/config/base'
import PropTypes from 'prop-types'
import {
  withRouter,
} from 'react-router-dom'
import styles from '@/style/menu/index.less'
import { getOpenKeys, getSelectKeys } from './navUtils'

const SubMenu = Menu.SubMenu

@withRouter
export default class Nav extends Component {

  constructor(props) {
    super(props)
    console.log(menusData)
    this.state = {
      // 是否迷你模式
      isMini: false,
      // 当前展开的submenu菜单项key数组
      openKeys: getOpenKeys(props, menusData),
    }
  }

  static propTypes = {
    location: PropTypes.object,
    history: PropTypes.object,
  }

  componentDidMount() {

  }


  static getDerivedStateFromProps(props, state) {
    const { pathname } = state
    if (props.location.pathname !== pathname) {
      return {
        pathname: props.location.pathname,
        openKeys: getOpenKeys(props, menusData),
      }
    }
    return null
  }

  /**
   * @description 点击收缩按钮
   * @memberof Nav
   */
  navMini = () => {
    this.setState(state => ({
      isMini: !state.isMini,
    }))
  }


  /**
   * @description 生成导航菜单
   * @memberof Nav
   */
  renderMenu = () => {
    const children = menusData

    return children.map((item) => {
      if (!item.children || item.children.length === 0) {
        return (
          <Menu.Item key={item.navKey ? item.navKey : item.id} name={item.navName} style={{ paddingLeft: 0 }}>
            <i className={`anticon qqbicon qqbicon-${item.navIcon}`} title={item.navName} />
            <span className="menu-name">{item.navName}</span>
          </Menu.Item>
        )
      }
      return (
        <SubMenu key={item.navKey}
          title={
            <span>
              <i className={`anticon qqbicon qqbicon-${item.navIcon}`} title={item.navName} />
              <span className="menu-name">{item.navName}</span>
            </span>
          }
        >
          {
            item.children.map((child) =>
              (
                <Menu.Item key={child.navKey ? child.navKey : child.id} name={child.navName} title={child.navName}>
                  <i className={`anticon qqbicon qqbicon-${child.navIcon}`} title={child.navName} />
                  <span className="menu-name">{child.navName}</span>
                </Menu.Item>
              ))
          }
        </SubMenu>
      )
    })
  }


  /**
   * @description 打开关闭折叠菜单
   * @memberof Nav
   */
  _handleToggle = (openKeys) => {
    // 保留一个
    if (openKeys.length > 1) {
      openKeys = [openKeys[openKeys.length - 1]]
    }
    console.log(openKeys)
    this.setState({
      openKeys,
    })
  }


  /**
   * @description 点击菜单
   * @memberof Nav
   */
  _handleClick = (e) => {
    this.props.history.push(e.key)
  }


  render() {
    const { isMini, openKeys } = this.state
    return (
      <div className={isMini ? 'main-body-nav nav-mini' : 'main-body-nav'}>
        <div className="nav-control" onClick={this.navMini}>
          <i className="qqbicon qqbicon-navcontrol" />
        </div>
        <Menu
          mode="inline"
          theme="dark"
          inlineIndent="16"
          inlineCollapsed={isMini}
          selectedKeys={getSelectKeys(this.props, menusData)}
          openKeys={openKeys}
          onOpenChange={this._handleToggle}
          onClick={this._handleClick}
        >
          {this.renderMenu()}
        </Menu>
      </div>
    )
  }
}