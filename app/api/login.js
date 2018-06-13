import * as ajax from '@utils/ajax'


// 登录
export const httpLogin = ajax.createHttpPost('/user/login')
// 注册
export const httpRegister = ajax.createHttpPost('/user/register')
// 登出
export const httpLogout = ajax.createHttpPost('/user/logout')
