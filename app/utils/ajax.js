import axios from 'axios'
import { toLoginPage } from './index'
import {
  message
} from 'antd'
import {
  prefix,
  suffix,
  timeout
} from '@config/base'
import { returnStatus } from '@config/code'

// axios配置
const axiosBaseConfig = {
  // baseURL: prefix,
  timeout: timeout,
  headers: {
    'Content-Type': 'text/plain'
  },
  method: 'post',
  // 跨域请求，是否带上认证信息
  withCredentials: false, // default
  // http返回的数据类型
  // 默认是json，可选'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  responseType: 'json', // default
  // http请求返回状态码检查
  validateStatus: status =>
    status >= 200 && status < 300, // default
  // 请求数据预处理
  transformRequest: [(data) => {
    // 加入token？
    // const token = sessionStorage.getItem('token')
    // if (token) {
    //   data.token = token
    // }
    // 请求对象转换成jon字符串，formdata数据除外
    if (typeof data === 'object' && !(data instanceof FormData)) {
      return JSON.stringify(data)
    }
    return data
  }],
  // 返回数据预处理
  transformResponse: [respData =>
    // 检查返回status值
    // if (typeof respData.status !== 'undefined') {
    //   if (respData.status === 1) {
    //     return respData
    //   }
    //   throw new Error(respData.errMsg || 'respData.status不为0')
    // }
    respData,
  ],
}
// axios 实例
const axiosInstance = axios.create(axiosBaseConfig)
// 拦截器
axiosInstance.interceptors.request.use(req => req, error =>
  // 当请求错误时
  Promise.reject(error))

axiosInstance.interceptors.response.use(resp => resp, (error) => {
  // 当返回错误时
  if (axios.isCancel(error)) {
    throw ({ message: '请求被取消' })
  }
  if ('code' in error && error.code === 'ECONNABORTED') {
    throw ({ message: '请求超时' })
  }
  return Promise.reject(error)
})

const axiosPost = (url, config, reqData, resolve, reject) => {
  const CancelToken = axios.CancelToken
  const source = CancelToken.source()
  axiosInstance.post(url, reqData, {
    cancelToken: source.token,
    ...config,
  })
    .then((resp) => resp.data)
    .then(
      resp => {
        switch (resp.status) {
          case returnStatus.NORMAL:
            // 正常数据
            resolve && resolve(resp)
            break
          case returnStatus.NOT_LOGIN:
            //  退出登录
            toLoginPage()
            break
          default:
            reject ? reject(resp) : message.error(resp.msg)
            break
        }
      }
    ).catch(err => {
      reject ? reject(err) : message.error(err.message || '未知错误')
    })
  return source.cancel
}

// post json字符串，即text/plain形式
const createHttpPost = (url, target) => {
  let newUrl
  if (target) {
    newUrl = `${target}${url}${suffix}`
  } else {
    newUrl = `${prefix}${url}${suffix}`
  }
  return (reqData, resolve, reject) => axiosPost(newUrl, {}, reqData, resolve, reject)
}

// post formdata，即multipart/form-data形式，用来上传文件等数据
const createHttpPostFormData = (url, target) => {
  let newUrl
  if (target) {
    newUrl = `${target}${url}${suffix}`
  } else {
    newUrl = `${prefix}${url}${suffix}`
  }
  let config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
  }
  return (reqData, resolve, reject) => axiosPost(newUrl, config, reqData, resolve, reject)
}


export {
  createHttpPost,
  createHttpPostFormData,
}