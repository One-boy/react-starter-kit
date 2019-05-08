/*
 * @Author: hy 
 * @Date: 2019-05-05 17:23:01 
 * @Last Modified by: hy
 * @Last Modified time: 2019-05-05 18:11:13
 */

//tab3

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Tab3 extends Component {
  constructor(props) {
    super(props)
    this.style = {
      height: '100%',
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