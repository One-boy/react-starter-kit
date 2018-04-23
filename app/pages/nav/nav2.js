import React, { Component } from 'react'
import { Button } from 'antd'
import TestStore from './testStore'

import { Connect } from '@components/store'

@Connect((store) => ({
  config: store.config,
}))
export default class home extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  updateStore = () => {
    this.props.StoreHandle && this.props.StoreHandle.setStore('config', { name: `random${Date.now()}` })
  }
  render() {
    return (
      <div className="nav-wrap">
        <div className="img-wrap">
          组件一 Store=  {this.props.config && this.props.config.name}
          {/* <img src="resource/image/1.jpg" /> */}
          <div>
            <Button onClick={this.updateStore}>更新store</Button>
          </div>
        </div>
        <TestStore />
      </div>
    )
  }
}

