
import Mock from '@/Mock'
import Base from './base'

class User extends Base {

  // 登录
  @Mock.User.login
  static async login(reqData) {
    return await this.ajaxPost('/usercenter/login', reqData)
  }

  // 注册
  @Mock.User.register
  static async register(reqData) {
    return await this.ajaxPost('/usercenter/register', reqData)
  }

  // 登出
  @Mock.User.logout
  static async logout(reqData) {
    return await this.ajaxPost('/usercenter/logout', reqData)
  }

}

export default User