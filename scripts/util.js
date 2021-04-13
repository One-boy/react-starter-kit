/* eslint-disable no-undef */
// 工具

function dateFormat(date = new Date(), str = 'yyyy-MM-dd hh:MM:ss S') {
  const reg = {
    'y+': date.getFullYear(), // 年
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    S: date.getMilliseconds(), // 毫秒
  }

  for (const k in reg) {
    const r = new RegExp(k, 'g')
    str = str.replace(r, (matchValue) => {
      //  一位数时加0
      if (matchValue.length === 2 && `${reg[k]}`.length === 1) {
        reg[k] = `0${reg[k]}`
      }
      //  毫秒是两位数时加0
      if (matchValue.length === 1 && `${reg[k]}`.length === 2) {
        reg[k] = `0${reg[k]}`
      }
      return reg[k]
    })
  }
  return str
}

module.exports = {
  dateFormat,
}
