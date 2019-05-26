/*
 * @Author: hy 
 * @Date: 2019-05-07 10:02:41 
 * @Last Modified by: hy
 * @Last Modified time: 2019-05-07 13:49:51
 */

// api父类

import * as ajax from '@/utils/ajax'
import { returnStatus } from '@/config/code'
import { toLoginPage } from '@/utils/index'
import {
  message
} from 'antd'

class ApiBase {

  // ajaxPost
  static ajaxPost(url, reqData, target) {
    return ApiBase._ajax(url, reqData, target, 'post')
  }

  // ajaxGet
  static ajaxGet(url, reqData, target) {
    return ApiBase._ajax(url, reqData, target, 'get')
  }

  // ajax
  static _ajax(url, reqData, target, type) {
    let func = type === 'post' ? ajax.createHttpPost : ajax.createHttpGet
    return new Promise((resolve, reject) => {
      func(url, reqData, target).then(
        resp => {
          switch (resp.status) {
            case returnStatus.NORMAL:
              // 正常数据
              resolve(resp)
              break
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
      ).catch(err => {
        message.warning(err.msg || err.message || '未知错误')
        reject(err)
      })
    })

  }
}

export default ApiBase
