
import Mock from '@/Mock'
import Base from './base'

class List extends Base {

  // 获取列表2
  @Mock.List.list2
  static async list2(reqData) {
    return await this.ajaxPost('/list/list2', reqData)
  }

  // 上传文件
  static async upload(reqData) {
    return await this.ajaxPost('/list/upload', reqData)
  }

}

export default List