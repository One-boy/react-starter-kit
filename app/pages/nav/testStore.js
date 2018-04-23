import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { Button, Modal, message } from 'antd'

import { Connect } from '@components/store'

@Connect((store) => ({
  config: store.config,
}))
export default class TestStore extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="nav-wrap" style={{ marginTop: '2em', borderTop: '1px solid #ccc' }}>
        组件二Store=>{this.props.config && this.props.config.name}
      </div>
    )
  }
}

TestStore.propTypes = {
  config: PropTypes.object,
}
