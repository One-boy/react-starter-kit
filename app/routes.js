/**
 * 根路由
 */

import React from 'react'
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import MainWrap from './base/index'
import Login from './base/login'
import NOTFOUND from './base/notfound'
import * as base from './pages/base'

const routes = (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route path="/" render={() => (
      <MainWrap>
        <Route exact path="/basePage/page1" component={base.base1} />
        <Redirect exact from="/" to="/basePage/page1" />
        <Route component={NOTFOUND} />
      </MainWrap>
    )} />

  </Switch>
)

export default routes
