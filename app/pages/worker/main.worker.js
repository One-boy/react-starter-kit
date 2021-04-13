/*
 * @Author: huyu
 * @Date: 2019-05-30 09:52:32
 * @Last Modified by: huyu
 * @Last Modified time: 2021-04-13 16:03:47
 */

// 使用worker-loader
// web workers ，worker.js端

onmessage = (e) => {
  console.log('Worker:收到Main发过来的消息', e.data)
  postMessage(
    `Worker已收到来自Main的消息: ${e.data} --${new Date().toLocaleString()}`
  )
}
