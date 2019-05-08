/*
 * @Author: hy 
 * @Date: 2019-05-05 17:47:31 
 * @Last Modified by:   hy 
 * @Last Modified time: 2019-05-05 17:47:31 
 */

 // 左侧导航
 
import React, { Component } from 'react'
import { Menu } from 'antd'
import { nav } from '@config/base'
import PropTypes from 'prop-types'
import {
  withRouter,
} from 'react-router-dom'
const SubMenu = Menu.SubMenu

@withRouter
export default class Nav extends Component {

  constructor(props) {
    super(props)
    this.state = {
      // 是否迷你模式
      isMini: false,
      // 当前展开的submenu菜单项key数组
      openKeys: [],
    }
  }

  static propTypes = {
    location: PropTypes.object,
    history: PropTypes.object,
  }


  componentWillMount() {
    this.setOpenKeys()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname.indexOf(this.state.openKeys[0] || 'nomatch')) {
      this.props = nextProps
      this.setOpenKeys()
    }
  }
  setOpenKeys = () => {
    // 初始化打开的折叠菜单
    const selectedKeys = this.leftMenuHighLight()
    nav.forEach(item => {
      if (selectedKeys[0].indexOf(item.navKey) !== -1) {
        this.setState({
          openKeys: [item.navKey],
        })
      }
    })
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
   * @description 从路由。获取左侧菜单高亮key
   * @memberof Nav
   */
  leftMenuHighLight = () => {
    const { pathname } = this.props.location
    let selectedKeys = [pathname]
    return selectedKeys
  }

  /**
   * @description 生成导航菜单
   * @memberof Nav
   */
  renderMenu = () => {
    const children = nav
    return children.map((item) => {
      if (!item.children || item.children.length === 0) {
        return (
          <Menu.Item key={item.navKey ? item.navKey : item.id} name={item.navName} style={{ paddingLeft: 0 }}>
            <i className={`qqbicon qqbicon-${item.navIcon}`} title={item.navName} />
            <span className="menu-name">{item.navName}</span>
          </Menu.Item>
        )
      }
      return (
        <SubMenu key={item.navKey}
          title={
            <span>
              <i className={`qqbicon qqbicon-${item.navIcon}`} title={item.navName} />
              <span className="menu-name">{item.navName}</span>
            </span>
          }
        >
          {
            item.children.map((child) =>
              (
                <Menu.Item key={child.navKey ? child.navKey : child.id} name={child.navName} title={child.navName}>
                  <i className={`qqbicon qqbicon-${child.navIcon}`} title={child.navName} />
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
    this.setState({
      openKeys,
    })
  }


  /**
   * @description 点击菜单
   * @memberof Nav
   */
  _handleClick = (e) => {
    this.props.history && this.props.history.push(e.key)
  }


  render() {
    const { isMini, openKeys } = this.state
    return (
      <div className={isMini ? 'main-body-nav nav-mini' : 'main-body-nav'}>
        <div className="LeftNav-control" onClick={this.navMini}>
          <i className="qqbicon qqbicon-navcontrol" />
        </div>
        <Menu
          mode="inline"
          theme="dark"
          inlineIndent="16"
          inlineCollapsed={isMini}
          selectedKeys={this.leftMenuHighLight()}
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