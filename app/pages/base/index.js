/**
 * 公共包裹，登录后的页面，都有一个公共的头部和左侧导航栏
 */
/* eslint  react/prop-types:0 */
import React, { Component } from 'react'
import Transition from '@components/transition'
import {
  Route,
  Redirect,
  Switch,
} from 'react-router-dom'

import Header from './header'
import Nav from './nav'
import NOTFOUND from './notfound'
import test from '@pages/test/index'

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
            <Switch>
              <Route path="/basePage/page1" component={test.test1} />
              {/* <Redirect to="/test1" /> */}
              <Route component={NOTFOUND} />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}
