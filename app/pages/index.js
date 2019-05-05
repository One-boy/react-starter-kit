/*
 * @Author: hy 
 * @Date: 2019-05-05 17:23:01 
 * @Last Modified by: hy
 * @Last Modified time: 2019-05-05 17:47:05
 */

//应用入口

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Switch,
  Route,
} from 'react-router-dom'
import Base from '@pages/base/index'
import Login from '@pages/login'

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