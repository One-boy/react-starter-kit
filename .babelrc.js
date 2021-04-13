// babel配置
// babel配置深入理解请看：https://mp.weixin.qq.com/s/B8XRsMg2uJrQTD5IFWOdlw

const presets = [
  [
    //主流浏览器具体支持到的最低版本,主要参考flex支持程度
    '@babel/preset-env',
    {
      targets: {
        chrome: '21',
        edge: '12',
        firefox: '28',
        safari: '6.1',
        ie: '9',
      },
      useBuiltIns: 'entry',
      corejs: {
        version: 3,
        proposals: true, // 可使用提议版本
      },
    },
  ],
  //jsx语法转换解析
  ['@babel/preset-react'],
]

const plugins = [
  //实验性功能：装饰器
  ['@babel/plugin-proposal-decorators', { legacy: true }],
  //实验性功能，可以在class中使用箭头函数方式定义类的实例方法
  // 在react类组件中不用在构造函数中bind
  ['@babel/plugin-proposal-class-properties', { loose: true }],
  // 支持动态导入，import('./xxx')
  ['@babel/plugin-syntax-dynamic-import'],
  //antd的按需加载
  [
    'import',
    {
      libraryName: 'antd',
      style: true,
    },
  ],
  ['react-hot-loader/babel'],
  [
    '@babel/plugin-transform-runtime',
    {
      corejs: false,
    },
  ],
]

module.exports = { presets, plugins }
