/*
 * @Author: hy 
 * @Date: 2019-05-05 17:48:17 
 * @Last Modified by: hy
 * @Last Modified time: 2019-05-06 10:46:53
 */

// 独立页

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect, Switch } from 'react-router-dom'


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
    return (
      <div style={this.style}>
            独立页
      </div>
    )
  }
}