/*
 * @Author: hy 
 * @Date: 2019-05-06 18:28:24 
 * @Last Modified by: hy
 * @Last Modified time: 2019-05-07 15:48:52
 */

// mock数据
import mock from '@/Mock/base'
import checkEnable from '@/Mock/checkEnable'

class List {

  @checkEnable
  static list2(target, name, descriptor) {

    descriptor.value = async (reqData) => {

      const data = {
        status: 1,
        msg: '登录成功',
        data: {
          list: [
            { name: '老王1', age: 33, idCard: '123456789987654321', id: 1 },
            { name: '老王2', age: 55, idCard: '223456789987654321', id: 2 },
            { name: '老王3', age: 66, idCard: '323456789987654321', id: 3 },
          ],
          pageSize: reqData.pageSize,
          pageNo: reqData.pageNo,
          total: 3,
        },
      }

      return await mock(data, 2000)
    }

    return descriptor
  }

}

export default List
