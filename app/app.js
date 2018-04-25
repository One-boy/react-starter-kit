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
import Base from './pages/base'
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
            <Route exact path="/bfyy/cmzgl" component={Base} />
            <Route exact path="/bfyy/cbhk" component={Base} />
            <Route exact path="/bfyy/dtlw" component={Base} />
            <Route exact path="/bfyy/twjm" component={Base} />
            <Route exact path="/bfyy/rcg" component={Base} />
            <Route exact path="/bfyy/qtbb" component={Base} />
            <Route exact path="/bjyy/dlxk" component={Base} />
            <Route exact path="/bjyy/dkwl" component={Base} />
            <Route component={NOTFOUND} />
          </MainWrap>
        )} />

      </Switch>
    )
  }
}
