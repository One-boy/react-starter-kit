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
    // 'Content-Type': 'text/plain',
    'Content-Type': 'application/json'
  },
  method: 'post',
  // 跨域请求，是否带上认证信息
  withCredentials: true, // default
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
  transformResponse: [respData => {
    // 检查返回status值
    // if (typeof respData.status !== 'undefined') {
    //   if (respData.status === 1) {
    //     return respData
    //   }
    //   throw new Error(respData.errMsg || 'respData.status不为0')
    // }
    // 针对ie处理一下字符串情况
    if (typeof respData === 'string') {
      try {
        return JSON.parse(respData)
      } catch (error) {
        // ...
      }
    }
    return respData
  }
    ,
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
  if ('message' in error && error.message === 'Network Error') {
    throw ({ message: '网络错误' })
  }
  if ('response' in error) {
    throw ({ message: `请求失败，HTTP CODE：${error.response.status}` })
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
    .then((resp) => {
      return resp.data
    })
    .then(
      resp => {
        switch (resp.status) {
          case returnStatus.NORMAL:
            // 正常数据
            resolve && resolve(resp)
            break
          case returnStatus.NOT_LOGIN:
            message.warn(resp.msg || '登录过期，即将跳转登录页...', 2, () => {
              //  退出登录
              toLoginPage()
            })
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


const axiosGet = (url, config, reqData, resolve, reject) => {
  const CancelToken = axios.CancelToken
  const source = CancelToken.source()

  let reqStr = ''
  Object.keys(reqData).forEach(key => {
    reqStr += `${key}=`
    reqStr += encodeURIComponent(reqData[key])
    reqStr += '&'
  })
  let newUrl = `${url}?${reqStr}`

  axiosInstance.get(newUrl, {
    cancelToken: source.token,
    ...config,
  })
    .then((resp) => JSON.parse((resp.data).replace(/'/g, '"')))
    .then(
      resp => {
        if (resp && Array.isArray(resp)) {
          // 正常数据
          resolve && resolve(resp)
        } else {
          reject ? reject(resp) : message.error(resp.msg)
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
  // reqData也可以传FormData,axios会自动识别post类型。
  return (reqData, resolve, reject) => axiosPost(newUrl, {}, reqData, resolve, reject)
}


const createHttpGet = (url, target) => {
  let newUrl
  if (target) {
    newUrl = `${target}${url}${suffix}`
  } else {
    newUrl = `${prefix}${url}${suffix}`
  }

  return (reqData, resolve, reject) => axiosGet(newUrl, {}, reqData, resolve, reject)
}

export {
  createHttpPost,
  createHttpGet,
}