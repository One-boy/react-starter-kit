/*
 * @Author: hy 
 * @Date: 2019-05-07 10:33:18 
 * @Last Modified by: hy
 * @Last Modified time: 2019-05-07 13:49:39
 */

// mock base 类

import { returnStatus } from '@/config/code'
import { toLoginPage } from '@/utils/index'
import {
  message
} from 'antd'

// mock
/**
 * @param resolve 回调解决
 * @param timeout 接口超时时间
 */
function mock(resp, timeout = 0) {
  return new Promise((resolve, reject) => {
    switch (resp.status) {
      case returnStatus.NORMAL:
        // 正常数据
        setTimeout(() => { resolve(resp) }, timeout)
        break
      case returnStatus.NOT_LOGIN:
        message.warn(resp.msg || '登录过期，即将跳转登录页...', 2, () => {
          //  退出登录
          toLoginPage()
        })
        break
      default:
        message.warning(resp.msg || resp.message || '未知错误')
        reject(new Error(resp.msg))
        break
    }
  })
}


export default mock