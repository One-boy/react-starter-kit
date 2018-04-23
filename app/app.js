/**
 * 根路由
 */

import React, { Component } from 'react'
import {
  Switch,
  Route,
} from 'react-router-dom'
import MainWrap from './base/index'
import Login from './base/login'
import NOTFOUND from './base/notfound'
import Nav1 from './pages/nav/nav1'
import Nav2 from './pages/nav/nav2'
// import Nav3 from './pages/nav/nav3'

export default class home extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/" render={() => (
          <MainWrap>
            <Route path="/nav1" component={Nav1} />
            <Route path="/nav2" component={Nav2} />
          </MainWrap>
        )} />
        <Route component={NOTFOUND} />
      </Switch>
    )
  }
}
