/*
 * @Author: huyu 
 * @Date: 2019-05-30 17:56:37 
 * @Last Modified by: huyu
 * @Last Modified time: 2019-05-31 10:15:06
 */

// 用于取消请求

// 根据AJAX_CANCEL_TOKEN保存取消方法
const CANCEL_FUNCS = new Map()

// 增加取消方法
function addCancelFunc(req, cancelFunc) {
  if (req.AJAX_CANCEL_TOKEN && typeof cancelFunc === 'function') {
    CANCEL_FUNCS.set(req.AJAX_CANCEL_TOKEN, cancelFunc)
    delete req.AJAX_CANCEL_TOKEN
  }
}


// 取消一个请求
function cancelRequest(tokens) {
  if (Array.isArray(tokens)) {
    tokens.forEach(token => {
      cancelToken(token)
    })
  } else if (typeof tokens === 'object') {
    cancelToken(tokens.AJAX_CANCEL_TOKEN)
  } else {
    cancelToken(tokens)
  }
}

// cancel toekn
function cancelToken(token) {
  if (CANCEL_FUNCS.has(token)) {
    CANCEL_FUNCS.get(token)()
    CANCEL_FUNCS.delete(token)
  }
}

export {
  addCancelFunc,
  cancelRequest,
}