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
import { Connect } from '@components/store'
import PropTypes from 'prop-types'

@Connect(() => ({}))
export default class home extends Component {
  constructor(props) {
    super(props)
  }
  static propTypes = {
    storeHandle: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  }

  // 绑定history方法到store的hashHistory字段
  componentDidMount() {
    this.props.storeHandle
      && this.props.storeHandle.setStore('hashHistory', this.props.history || {})
  }
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/" render={(props) => (
          <MainWrap {...props}>
            <Route path="/jcdh/nav1" component={Nav1} />
            <Route path="/jcdh/nav2" component={Nav2} />
            <Route component={NOTFOUND} />
          </MainWrap>
        )} />

      </Switch>
    )
  }
}
