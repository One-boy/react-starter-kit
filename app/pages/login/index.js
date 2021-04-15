/*
 * @Author: hy
 * @Date: 2019-05-05 17:48:01
 * @Last Modified by: huyu
 * @Last Modified time: 2021-04-15 11:21:14
 */

// 登录

import React, { useState } from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import AJAXUser from '@/api/User'
import styles from './index.module.less'
import classNames from 'classnames'
import Proptypes from 'prop-types'

const FormItem = Form.Item

function Login(props) {
  const [btnLoading, setBtnLoading] = useState(false)
  // test no unused vars
  const [form] = Form.useForm()
  console.log(form)
  const onFinish = async (values) => {
    console.log('Success:', values)
    const reqData = values
    setBtnLoading(true)

    try {
      let data = await AJAXUser.login(reqData)
      console.log('返回登录数据', data)
      props.history && props.history.push('/')
    } catch (error) {
      console.log('返回错误', error)
    }
    setBtnLoading(false)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className={classNames(styles.wrap, styles.wrap2, 'wrap3')}>
      <div className={styles.content}>
        <h2>登录</h2>
        <Form
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className={styles['login-form']}
        >
          <FormItem
            name="username"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="用户名" />
          </FormItem>
          <FormItem
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="密码"
            />
          </FormItem>
          <FormItem name="remember" initialValue valuePropName="checked">
            <Checkbox>记住我</Checkbox>
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className={styles['login-form-button']}
              loading={btnLoading}
            >
              登录
            </Button>
          </FormItem>
        </Form>
      </div>
    </div>
  )
}

Login.propTypes = {
  history: Proptypes.object,
}
export default Login
