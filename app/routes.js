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
import Base from './pages/base'

const routes = (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route path="/" render={() => (
      <MainWrap>
        <Route exact path="/basePage/page1" component={Base} />
        <Route exact path="/basePage/page2" component={Base} />
        <Route exact path="/basePage/page3" component={Base} />
        <Route exact path="/basePage/page4" component={Base} />
        <Route exact path="/basePage/page5" component={Base} />
        <Route exact path="/basePage/page6" component={Base} />
        <Route exact path="/extPage/page1" component={Base} />
        <Route exact path="/extPage/page2" component={Base} />
        <Redirect exact from="/" to="/basePage/page1" />
        <Route component={NOTFOUND} />
      </MainWrap>
    )} />

  </Switch>
)

export default routes
