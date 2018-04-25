/**
 * 过渡组件
 * 路由出场入场动画
 * location必须传
 * children=(
 * <Switch location={this.props.location}>
 *    <Route/>
 *    ...
 * </Switch>
 * )
 */
/* eslint react/no-direct-mutation-state:0*/
/* eslint react/prop-types:0*/
import React, { Component } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'
import { Connect } from '@components/store'
import './index.less'

@Connect(store => ({
  transitionActionKey: store.transitionActionKey,
}))
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
    children: PropTypes.object,
    // 路由组件的location
    location: PropTypes.shape({
      pathname: PropTypes.string,
    })
  }

  render() {
    // 入场和出场的时间,单位ms
    const pageTransitionDuration = {
      enter: 550,
      exit: 250,
    }
    const { transitionActionKey } = this.state
    const transitionAction = `transitionAction-${transitionActionKey}`
    const { location: { pathname }, children } = this.props
    return (
      <TransitionGroup
        className="transition-container"
        component="div"
      >
        <CSSTransition
          key={pathname || '/'}
          classNames={transitionAction}
          mountOnEnter={true}
          unmountOnExit={true}
          timeout={pageTransitionDuration}
        >
          <div className="transition-wrapper">
            {children}
          </div>
        </CSSTransition>
      </TransitionGroup>
    )
  }
}

