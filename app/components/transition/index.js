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

import React, { Component } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'

export default class Transition extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    children: PropTypes.object,
    // 路由组件的location
    location: PropTypes.shape({
      pathname: PropTypes.string,
    })
  }
  render() {
    const pageTransitionDuration = {
      enter: 500,
      exit: 500,
    }
    const { location: { pathname }, children } = this.props
    return (
      <TransitionGroup
        className="route-page-transition-container"
        component="div"
      >
        <CSSTransition
          key={pathname || '/'}
          classNames="route-page-transition-move"
          mountOnEnter={true}
          unmountOnExit={true}
          timeout={pageTransitionDuration}
        >
          <div className="route-page-transition-wrapper">
            {children}
          </div>
        </CSSTransition>
      </TransitionGroup>
    )
  }
}

