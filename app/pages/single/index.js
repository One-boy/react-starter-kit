/*
 * @Author: hy
 * @Date: 2019-05-05 17:48:17
 * @Last Modified by: huyu
 * @Last Modified time: 2021-04-13 16:03:33
 */

// 独立页

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Single1 extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.style = {
      height: '100%',
    }
  }

  static propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
  }

  render() {
    return <div style={this.style}>独立页</div>
  }
}
