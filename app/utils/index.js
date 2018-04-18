import { message } from 'antd'
import { hashHistory } from 'react-router'
import * as ajaxFun from './ajax'

export const ajax = ajaxFun
export function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]'
}

export const createAjaxAction = (httpHandle, startAction, endAction) => (reqData, cb, reject, handleCancel) =>
  (dispatch) => {
    // requet start
    startAction && dispatch(startAction())
    httpHandle(reqData, handleCancel)
      .then((resp) => {
        endAction && dispatch(endAction({ req: reqData, res: resp.data }))
        return resp.data
      })
      .then((resp) => {
        switch (resp.status) {
          case 1:
            cb && cb(resp)
            break
          case 0:
          default:
            if (resp.status === -1) {
              sessionStorage.clear()
              hashHistory.push('/login')
            }
            if (reject) {
              reject(resp)
            } else {
              message.error(resp.msg)
            }
            break
        }
      })
      .catch((error) => {
        if (reject) {
          reject({ status: 0, msg: error.message })
        } else {
          message.error(error.message)
        }
      })
  }
