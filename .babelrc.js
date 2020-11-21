
// babel配置
const presets = [
    [
        //主流浏览器具体支持到的最低版本,主要参考flex支持程度
        "@babel/preset-env",
        {
            "targets": {
                "chrome": "21",
                "edge": "12",
                "firefox": "28",
                "safari": "6.1",
                "ie": "9"
            },
            'useBuiltIns': 'entry',
            corejs: 3
        }
    ],
    //jsx语法转换解析
    [
        "@babel/preset-react"
    ]
]

const plugins = [
    //实验性功能：装饰器
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    //实验性功能：类属性，如类类的方法可直接赋值为箭头函数，在react中不用在构造函数中bind
    ["@babel/plugin-proposal-class-properties", { "loose": true }],
    // 支持动态导入，import('./xxx')
    ['@babel/plugin-syntax-dynamic-import'],
    //antd的按需加载
    [
        "import",
        {
            "libraryName": "antd",
            "style": true
        }
    ],
    ['react-hot-loader/babel']
]


module.exports = { presets, plugins }