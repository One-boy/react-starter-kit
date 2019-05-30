/*
 * @Author: hy 
 * @Date: 2019-05-05 17:48:17 
 * @Last Modified by: huyu
 * @Last Modified time: 2019-05-30 11:10:59
 */

// web workers示例

import React, { Component } from 'react'
import MainWorker from './main.worker'
import { Row, Col, Button, Input } from 'antd'

export default class Worker extends Component {

  constructor(props) {
    super(props)
    this.state = {
      //input value
      value: '',
      //收到的消息
      text: '',
    }
    this.style = {
      height: '100%',
    }
  }

  componentDidMount() {
    this.worker = new MainWorker()
    this.worker.onmessage = this.onMessage.bind(this)
    this.worker.onerror = (err) => {
      console.error(err)
    }
  }

  //onChange
  onChange = (e) => {
    this.setState({ value: e.target.value })
  }

  //接收消息
  onMessage = (e) => {
    this.setState({ text: e.data })
  }

  //发送消息
  onClickSend = () => {
    const { value } = this.state
    console.log(value, this.worker)
    this.worker && this.worker.postMessage(value)
  }

  render() {
    const { text, value } = this.state
    return (
      <div style={this.style}>
        <h3>Web Workers 示例：</h3>
        <Row gutter={16}>
          <Col span={8}><Input placeholder="请输入消息" value={value} onChange={this.onChange} /></Col>
          <Col span={8}><Button onClick={this.onClickSend}>发送消息</Button></Col>
        </Row>
        <h5>收到来自Worker的消息：</h5>
        <p>{text}</p>
      </div>
    )
  }
}