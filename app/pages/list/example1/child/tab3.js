/*
 * @Author: hy 
 * @Date: 2019-05-05 17:23:01 
 * @Last Modified by: huyu
 * @Last Modified time: 2020-05-03 11:23:11
 */

// tab3

import React, { Component } from 'react'

export default class Tab3 extends Component {
  constructor(props) {
    super(props)
    this.style = {
      paddingTop: 30,
    }
  }

  render() {
    return (
      <div style={this.style}>
        <h3>tab3</h3>
      </div>
    )
  }
}