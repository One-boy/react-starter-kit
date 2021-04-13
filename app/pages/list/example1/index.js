/*
 * @Author: hy
 * @Date: 2019-05-05 17:48:17
 * @Last Modified by: huyu
 * @Last Modified time: 2021-04-13 16:04:04
 */

// 测试页

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Tabs } from 'antd'
import { Route, Redirect, Switch } from 'react-router-dom'
import tab1 from './child/tab1'
import tab2 from './child/tab2'
import tab3 from './child/tab3'

const TabPane = Tabs.TabPane

export default class test1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeKey: props.location.pathname,
    }
    this.style = {
      height: '100%',
    }
  }

  static propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
  }

  static getDerivedStateFromProps(props, state) {
    if (props.location.pathname !== state.activeKey) {
      return { activeKey: props.location.pathname }
    }
    return null
  }

  // tab变化
  onChangeTab = (activeKey) => {
    console.log(this.props)
    // const url = `${this.props.match.url}/${activeKey}`
    this.setState({ activeKey })
    this.props.history.push(activeKey)
  }

  render() {
    const { url } = this.props.match
    const { activeKey } = this.state

    return (
      <div style={this.style}>
        <Tabs activeKey={activeKey} onChange={this.onChangeTab}>
          <TabPane tab="Tab 1" key={`${url}/tab1`} />
          <TabPane tab="Tab 2" key={`${url}/tab2`} />
          <TabPane tab="Tab 3" key={`${url}/tab3`} />
        </Tabs>
        <Switch>
          <Route exact path={`${url}/tab1`} component={tab1} />
          <Route exact path={`${url}/tab2`} component={tab2} />
          <Route exact path={`${url}/tab3`} component={tab3} />
          <Redirect from={url} to={`${url}/tab1`} />
        </Switch>
      </div>
    )
  }
}
