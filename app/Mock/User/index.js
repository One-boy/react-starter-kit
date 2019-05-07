/*
 * @Author: hy 
 * @Date: 2019-05-06 18:28:24 
 * @Last Modified by: hy
 * @Last Modified time: 2019-05-07 14:05:59
 */

// mock数据
import mock from '@Mock/base'

class User {

  static login(target, name, descriptor) {

    descriptor.value = async (reqData) => {

      const data = {
        status: 1,
        msg: '登录成功',
        data: reqData,
      }

      return await mock(data)
    }

    return descriptor
  }

  static logout(target, name, descriptor) {

    descriptor.value = async (reqData) => {

      const data = {
        status: 1,
        msg: '登出成功',
        data: reqData,
      }

      return await mock(data)
    }

    return descriptor
  }

  static register(target, name, descriptor) {

    descriptor.value = async (reqData) => {

      const data = {
        status: 1,
        msg: '注册成功',
        data: { t: '注册消息', ...reqData },
      }

      return await mock(data)
    }

    return descriptor
  }
}

export default User
