/*
 * @Author: hy 
 * @Date: 2019-05-07 10:02:41 
 * @Last Modified by: huyu
 * @Last Modified time: 2019-05-31 14:10:26
 */

// api父类

import * as ajax from '@/utils/ajax'
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
      func(url, reqData, target).then(resp => resolve(resp)).catch(err => {
        message.warning(err.msg || err.message || '未知错误')
        reject(err)
      })
    })

  }
}

export default ApiBase
