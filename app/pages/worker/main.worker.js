/*
 * @Author: huyu 
 * @Date: 2019-05-30 09:52:32 
 * @Last Modified by: huyu
 * @Last Modified time: 2019-05-30 11:10:58
 */

// 使用worker-loader
// web workers ，worker.js端

onmessage = (e) => {
  console.log('Worker:收到Main发过来的消息', e.data)
  postMessage(`Worker已收到来自Main的消息: ${e.data} --${new Date().toLocaleString()}`)
}