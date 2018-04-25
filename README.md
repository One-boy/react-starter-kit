# react PC端开发基础脚手架
### 技术栈及环境
- `react@16.3+webpack@4.x+antd@3.x+react-router@4.x`
- antd使用`babel-plugin-import`按需加载
- `node v8.6.0`
- `npm v5.3`
### 安装
- git clone 本项目
- npm install
- 开发：npm start
- 打包：npm run build

### 其它说明
- 当你的antd字体文件需要本地部署时，又想要antd样式使用babel-plugin-import按需加载
- 可以参考下面方式:
```
1：
在react-starter-kit\node_modules\antd\lib\style文件夹下新建\resource\iconfont文件夹
然后把四个字体文件拷贝进去，名字如下：
iconfont.svg  iconfont.woff iconfont.eot iconfont.ttf
2：
然后修改react-starter-kit\node_modules\antd\lib\style\themes\default.less里面的
@icon-url值为"../resource/iconfont/iconfont"
3:
此时，webpack就会根据配置把四个文件打包到resource/iconfont目录下
{
  test: /\.(woff|eot|ttf|svg|gif)$/,
  use: [{
    loader: 'url-loader',
    options: {
      limit: 8192,
      name: 'resource/iconfont/[hash:4].[ext]',
    },
  }],
},
```