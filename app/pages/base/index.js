/* eslint  react/prop-types:0 */
import React, { Component } from 'react'

export default class home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      text: 123,
      loading: false,
    }
    this.style = {
      height: '100%',
      // backgroundColor: `rgb(${this.random()},${this.random()},${this.random()})`,
      paddingTop: 30,
    }
  }

  random = () => {
    return Math.ceil(Math.random() * 255)
  }
  render() {
    return (
      <div style={this.style}>
        <h2 style={{ textAlign: 'center' }}>{this.props.location.pathname}</h2>
      </div>
    )
  }
}
