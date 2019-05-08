/*
 * @Author: hy 
 * @Date: 2019-05-07 17:54:26 
 * @Last Modified by: hy
 * @Last Modified time: 2019-05-08 11:53:34
 */


//登录页


import React, { Component } from 'react'
import {
  Page,
  LoginScreen,
  View,
  List,
  ListInput,
  ListButton,
  LoginScreenTitle,
  BlockFooter
} from 'framework7-react'
import AJAXUser from '@api/User'

export default class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //登录按钮loading
      btnLoading: false,
    }
  }

  //登录操作
  async onLogin() {
    this.$f7.dialog.preloader('正在登录请稍后...')
    try {
      const reqData = {}
      let data = await AJAXUser.login(reqData)
      console.log('返回登录数据', data)

      setTimeout(() => {
        this.$f7.dialog.close()
        //关闭登录页
        this.loginScreenNode.close()
      }, 2000)

    } catch (error) {
      console.log('返回错误', error)
    }
  }


  render() {
    return (
      <LoginScreen id="login-screen" ref={node => this.loginScreenNode = node}>
        <View>
          <Page loginScreen>
            <LoginScreenTitle>登录</LoginScreenTitle>
            <List form>
              <ListInput
                label="用户名"
                name="username"
                placeholder="请输入用户名"
                type="text"
              />
              <ListInput
                label="密码"
                name="password"
                placeholder="请输入密码"
                type="password"
              />
            </List>
            <List>
              <ListButton title="登录" onClick={this.onLogin.bind(this)}></ListButton>
              <BlockFooter>
                <p>点击登录，加载2秒后关闭窗口</p>
              </BlockFooter>
            </List>
          </Page>
        </View>
      </LoginScreen>
    )
  }
}