/*
 * @Author: huyu
 * @Date: 2019-05-31 10:21:37
 * @Last Modified by: huyu
 * @Last Modified time: 2019-05-31 10:28:15
 */

// ajax一些工具
import { returnStatus } from '@/config/code'
import { message } from 'antd'
import { toLoginPage } from '@/utils/index'

function checkResponse(resp) {
  switch (resp.status) {
    case returnStatus.NORMAL:
      return resp
    case returnStatus.NOT_LOGIN:
      message.warn(resp.msg || '登录过期，即将跳转登录页...', 2, () => {
        //  退出登录
        toLoginPage()
      })
      break
    default:
      throw new Error(resp.msg)
  }
}

export {
  checkResponse,
}