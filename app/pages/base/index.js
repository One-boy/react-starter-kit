/**
 * 公共包裹，登录后的页面，都有一个公共的头部和左侧导航栏
 */
/* eslint  react/prop-types:0 */
import React, { Component } from 'react'
import {
  Route,
  Switch,
} from 'react-router-dom'

import Header from './header'
import Nav from './nav'
import NOTFOUND from './notfound'
import example1 from '@/pages/list/example1'
import example2 from '@/pages/list/example2'
import single from '@/pages/single'

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
              <Route path="/list/example1" component={example1} />
              <Route path="/list/example2" component={example2} />
              <Route path="/single" component={single} />
              <Route component={NOTFOUND} />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}
