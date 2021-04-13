/*
 * @Author: hy
 * @Date: 2019-05-07 15:49:08
 * @Last Modified by: huyu
 * @Last Modified time: 2021-04-13 19:02:53
 */

// 检查mock是否启用
// 如果启用，则不做操作，如果未启用，则执行http逻辑

import { EnableMock } from '@/config/base'

function checkEnable(target, name, descriptor) {
  if (!EnableMock) {
    descriptor.value = function (t, n, desc) {
      return desc
    }
  }
  return descriptor
}

export default checkEnable
