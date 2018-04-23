/**
 * 全局store提供者，改变store的方法都在这里
 */
/* eslint  react/prop-types:0 */
import React, { Component } from 'react'
import StoreContext from './context'

export default class Provider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      store: this.props.store || {},
      setStore: this.setStore,
    }
  }

  /**
   * 设置store的值
   */
  setStore = (key, value) => {
    const { store } = this.state
    store[key] = value
    this.setState({
      store,
    })
  }

  render() {
    return (
      <StoreContext.Provider value={this.state}>
        {this.props.children}
      </StoreContext.Provider>
    )
  }
}
