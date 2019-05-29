/*
 * @Author: huyu
 * @Date: 2019-05-28 10:12:29
 * @Last Modified by: huyu
 * @Last Modified time: 2019-05-29 14:12:58
 */

// 错误边界组件
// 捕获子组件的js错误，以及React.lazy+Suspense未加载成功时抛出的错误
// 官方文档：https://zh-hans.reactjs.org/docs/error-boundaries.html

import React, { Component } from 'react'
import { Row, Col, Button, Card } from 'antd'
import Proptypes from 'prop-types'
import { withRouter } from 'react-router-dom'


@withRouter
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
    }
  }

  static propTypes = {
    children: Proptypes.object,
  }


  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    // 
    console.error(error)
  }

  // 去上一页
  onClickGoBack = () => {
    this.props.history.goBack()
  }

  // 去首页
  onClickGoHome = () => {
    this.props.history.replace('/login')
  }

  // 重新加载
  onClickReload = () => {
    location.reload()
  }

  render() {
    if (this.state.hasError) {
      return (
        <Card bordered={false}>
          <Row >
            <Col span={24}> <p>Something has error</p></Col>
            <Col span={6}><Button onClick={this.onClickGoBack}>回到上一页</Button></Col>
            <Col span={6}><Button onClick={this.onClickGoHome}>去首页</Button></Col>
            <Col span={6}><Button onClick={this.onClickReload}>重新加载</Button></Col>
          </Row>
        </Card>
      )
    }
    return this.props.children
  }
}
