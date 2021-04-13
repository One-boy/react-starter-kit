// prettier.config.js 配置文件
// 配置文档：https://prettier.io/docs/en/options.html
module.exports = {
  printWidth: 80, // 一行的字符数，如果超过会进行换行，默认为80
  trailingComma: 'es5', // 是否使用尾逗号，有三个可选值"<none|es5|all>"
  useTabs: false, // 是否使用tab进行缩进，默认为false，表示用空格进行缩减
  tabWidth: 2, // 一个tab两个空格
  semi: false, // 行尾是否使用分号，默认为true
  singleQuote: true, // 字符串是否使用单引号，默认为false，使用双引号
  endOfLine: 'auto', // 换行符，auto:不检测换行符
}
