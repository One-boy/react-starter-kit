import axios from 'axios'
import {
  prefix,
  suffix,
  timeout
} from '@/config/base'
import { addCancelFunc, cancelRequest } from './ajaxCancel'
import { checkResponse } from './ajaxUtil'

// axios配置
const _axiosBaseConfig = {
  // baseURL: prefix,
  timeout: timeout,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    // 'Content-Type': 'text/plain',
    // 'Content-Type': 'application/json'
  },
  method: 'post',
  // 跨域请求，是否带上认证信息
  withCredentials: false, // default
  // http返回的数据类型
  // 默认是json，可选'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  responseType: 'json', // default
  // http请求返回状态码检查
  validateStatus: status => (status >= 200 && status < 300), // default
  // 请求数据预处理
  transformRequest: [(data) => {
    // 针对需要json字符串参数得请求
    // if (typeof data === 'object' && !(data instanceof FormData)) {
    //   return JSON.stringify(data)
    // }
    // 针对x-www-form-urlencoded请求
    if (typeof data === 'object' && !(data instanceof FormData)) {
      let reqArray = []
      Object.keys(data).forEach(key => {
        reqArray.push(`${key}=${encodeURIComponent(data[key])}`)
      })
      return reqArray.join('&')
    }
    return data
  }],
  // 返回数据预处理
  transformResponse: [(respData, headers) => {
    // 针对ie处理一下字符串情况
    const ct = headers['content-type']
    if (ct && ct.indexOf('application/json') !== -1) {
      if (typeof respData === 'string') {
        return JSON.parse(respData)
      }
    }
    return respData
  }],
}
// axios 实例
const axiosInstance = axios.create(_axiosBaseConfig)
// 拦截器
axiosInstance.interceptors.request.use(req => req, error => Promise.reject(error))

axiosInstance.interceptors.response.use(resp => checkResponse(resp.data), (error) => {
  // 当返回错误时
  if (axios.isCancel(error)) {
    throw ({ message: '请求被取消' })
  }
  if ('code' in error && error.code === 'ECONNABORTED') {
    throw ({ message: '请求超时' })
  }
  if ('message' in error && error.message === 'Network Error') {
    throw ({ message: '网络错误' })
  }
  if ('response' in error) {
    throw ({ message: `请求失败，HTTP CODE：${error.response.status}` })
  }
  return Promise.reject(error)
})

const _axiosPost = async (url, config, reqData) => {
  const CancelToken = axios.CancelToken
  const source = CancelToken.source()
  addCancelFunc(reqData, source.cancel)
  const resp = await axiosInstance.post(url, reqData, {
    cancelToken: source.token,
    ...config,
  })
  cancelRequest(reqData)
  return resp.data
}

const _axiosGet = async (url, config, reqData) => {
  const CancelToken = axios.CancelToken
  const source = CancelToken.source()
  addCancelFunc(reqData, source.cancel)
  let reqArray = []
  Object.keys(reqData).forEach(key => {
    reqArray.push(`${key}=${encodeURIComponent(reqData[key])}`)
  })
  let newUrl = `${url}?${reqArray.join('&')}`

  const resp = await axiosInstance.get(newUrl, {
    cancelToken: source.token,
    ...config,
  })
  cancelRequest(reqData)
  return resp.data
}

// create url
const _createUrl = (target, url) => {
  let newUrl
  if (target) {
    newUrl = `${target}${url}${suffix}`
  } else {
    newUrl = `${prefix}${url}${suffix}`
  }
  return newUrl
}

// post
const createHTTPPost = (url, reqData, target) => _axiosPost(_createUrl(target, url), {}, reqData)

// get
const createHTTPGet = (url, reqData, target) => _axiosGet(_createUrl(target, url), {}, reqData)

export {
  createHTTPPost,
  createHTTPGet,
}