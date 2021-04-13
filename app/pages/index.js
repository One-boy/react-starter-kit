/*
 * @Author: hy
 * @Date: 2019-05-05 17:23:01
 * @Last Modified by: huyu
 * @Last Modified time: 2021-04-13 14:27:55
 */

// 应用入口

import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Base from '@/pages/base/index'
import Login from '@/pages/login'

export default class Index extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/" component={Base} />
      </Switch>
    )
  }
}
