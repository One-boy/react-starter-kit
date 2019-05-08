/**
 * 过渡组件
 * 路由出场入场动画
 */
/* eslint react/no-direct-mutation-state:0*/
/* eslint react/prop-types:0*/
import React, { Component } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'
import { withRouter, Switch } from 'react-router-dom'
import './index.less'

@withRouter
export default class Transition extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // 动画方式，默认上下淡入淡出
      // fade-lr:左右淡入淡出
      // fade-tb:上下淡入淡出
      transitionActionKey: 'fade-tb',
    }
  }


  static propTypes = {
    children: PropTypes.array,
    // 路由组件的location
    location: PropTypes.shape({
      pathname: PropTypes.string,
    })
  }

  /**
   * pathname阶段，在本系统中，默认pathname超过两个/就为子路由，不加载动画
   */
  substrPathname = (pathname) => {
    return pathname.split('/').slice(0, 3).join('/')
  }
  render() {
    // 入场和出场的时间,单位ms
    const pageTransitionDuration = {
      enter: 550,
      exit: 250,
    }
    const { transitionActionKey } = this.state
    const transitionAction = `transitionAction-${transitionActionKey}`
    const { location, children } = this.props
    return (
      <TransitionGroup
        className="transition-container"
        component="div"
      >
        <CSSTransition
          key={this.substrPathname(location.pathname) || '/'}
          classNames={transitionAction}
          mountOnEnter={true}
          unmountOnExit={true}
          timeout={pageTransitionDuration}
        >
          <div className="transition-wrapper">
            <Switch location={location}> {children}</Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
    )
  }
}

