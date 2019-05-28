/**
 * 公共包裹，登录后的页面，都有一个公共的头部和左侧导航栏
 */
/* eslint  react/prop-types:0 */
import React, { Component, Suspense } from 'react'
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import ErrorBoundary from '@/components/ErrorBoundary'
import Header from './header'
import Nav from './nav'
import NOTFOUND from './notfound'
// import example1 from '@/pages/list/example1'
import example2 from '@/pages/list/example2'
import single from '@/pages/single'

// 动态导入
const example1 = React.lazy(() => import('@/pages/list/example1'))

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
            <ErrorBoundary>
              <Suspense fallback={<div>Loading....</div>} >
                <Switch >
                  <Route path="/list/example1" component={example1} />
                  <Route path="/list/example2" component={example2} />
                  <Route path="/single" component={single} />
                  <Redirect from="/" to="/list/example1" />
                  <Route component={NOTFOUND} />
                </Switch>
              </Suspense>
            </ErrorBoundary>
          </div>
        </div>
      </div>
    )
  }
}
