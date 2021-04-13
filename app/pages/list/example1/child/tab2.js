/*
 * @Author: hy
 * @Date: 2019-05-05 17:23:01
 * @Last Modified by: huyu
 * @Last Modified time: 2021-04-13 16:04:16
 */

// tab2

import React, { Component } from 'react'

export default class Tab2 extends Component {
  constructor(props) {
    super(props)
    this.style = {
      paddingTop: 30,
    }
  }

  render() {
    return (
      <div style={this.style}>
        <h3>tab2</h3>
      </div>
    )
  }
}
