/*
 * @Author: hy 
 * @Date: 2019-05-07 10:33:18 
 * @Last Modified by: huyu
 * @Last Modified time: 2019-05-31 14:12:17
 */

// mock base 类

import {
  message
} from 'antd'
import { checkResponse } from '@/utils/ajaxUtil'

// mock
/**
 * @param resolve 回调解决
 * @param timeout 接口超时时间
 */
function mock(resp, timeout = 0) {
  return new Promise((resolve, reject) => {
    try {
      let newResp = checkResponse(resp)
      setTimeout(() => { resolve(newResp) }, timeout)
    } catch (error) {
      message.warning(resp.msg || resp.message || '未知错误')
      reject(new Error(resp.msg))
    }
  })
}


export default mock