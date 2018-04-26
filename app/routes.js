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
        <Route exact path="/bfyy/cmzgl" component={Base} />
        <Route exact path="/bfyy/cbhk" component={Base} />
        <Route exact path="/bfyy/dtlw" component={Base} />
        <Route exact path="/bfyy/twjm" component={Base} />
        <Route exact path="/bfyy/rcg" component={Base} />
        <Route exact path="/bfyy/qtbb" component={Base} />
        <Route exact path="/bjyy/dlxk" component={Base} />
        <Route exact path="/bjyy/dkwl" component={Base} />
        <Redirect exact from="/" to="/bfyy/cmzgl" />
        <Route component={NOTFOUND} />
      </MainWrap>
    )} />

  </Switch>
)

export default routes
