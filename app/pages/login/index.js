/*
 * @Author: hy 
 * @Date: 2019-05-05 17:48:01 
 * @Last Modified by: hy
 * @Last Modified time: 2019-05-05 17:49:47
 */

// 登录

/* eslint  react/prop-types:0 */
import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox, message } from 'antd'
import { httpLogin, httpRegister } from '@api/login'

const FormItem = Form.Item

@Form.create()
export default class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      // 是否注册 
      isRegister: false,
      // 按钮加载
      btnLoading: false,
      // 切换按钮文字
      registerText: '注册'
    }
  }

  /**
   * 表单登录
   */
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (err) {
        return
      }
      const reqData = values
      this.setState({
        btnLoading: true,
      })
      if (this.state.isRegister) {
        httpRegister(reqData, res => {
          this.setState({
            btnLoading: false,
            isRegister: false,
          })
          console.log(res)
          // this.props.history && this.props.history.push('/')
        }, (error) => {
          message.warn(error.msg || error.message || '未知错误')
          this.setState({
            btnLoading: false,
          })
        })
      } else {
        httpLogin(reqData, res => {
          this.setState({
            btnLoading: false,
          })
          console.log(res)
          this.props.history && this.props.history.push('/')
        }, (error) => {
          message.warn(error.msg || error.message || '未知错误')
          this.setState({
            btnLoading: false,
          })
          this.props.history && this.props.history.push('/')
        })
      }

    })
  }

  /**
   * 去注册
   */
  chanageRegister = () => {
    let { isRegister } = this.state
    if (isRegister) {
      this.setState({
        isRegister: false,
        registerText: '注册'
      })
    } else {
      this.setState({
        isRegister: true,
        registerText: '登录'
      })
    }

  }

  render() {
    const { getFieldDecorator } = this.props.form
    const { isRegister, btnLoading, registerText } = this.state
    return (
      <div className="login-wrap">
        <div className="login-content">
          <h2>登录</h2>
          <Form onSubmit={this.handleSubmit} className="login-form">
            {
              isRegister ?
                <FormItem>
                  {getFieldDecorator('nickName', {
                    rules: [{ required: true, message: '请输入昵称' }],
                  })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="nickName" placeholder="昵称" />
                  )}
                </FormItem>
                : null
            }
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: '请输入用户名' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
              )}
            </FormItem>

            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>记住我</Checkbox>
              )}
              {/* <a className="login-form-forgot" href="">忘记密码</a> */}
              <Button type="primary" htmlType="submit" className="login-form-button" loading={btnLoading}>
                {registerText === '登录' ? '注册' : '登录'}
              </Button>
              <a onClick={this.chanageRegister}>{registerText}</a>
            </FormItem>
          </Form>
        </div>
      </div>
    )
  }
}
