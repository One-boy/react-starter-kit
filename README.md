# 基于 react PC 端的中后台开发基础脚手架

### 技术栈及环境

- `react@17.x+webpack@5.x+antd@4.x+react-router-dom@5.x`
- antd 使用`babel-plugin-import`按需加载
- `node v14.3.0`
- `npm v6.14.5`

### 安装

- git clone 本项目
- npm install
  - 注意：安装时会下载 chrommium 包，如果不需要下载：请使用环境变量`PUPPETEER_SKIP_CHROMIUM_DOWNLOAD`
  - windows git bash 使用：`export PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=1`，然后`npm install`
- 前提：npm run createDll -- 执行 dll 静态化公共库
- 开发：npm start
- 打包：npm run build
- 测试：
  - js：npm run test:js
  - ui：npm run test:ui

### 使用说明

#### 工程化

- **样式**
  预编译采用`Less`
  启用了`css-loader`的 `modules` 功能，开启模块化(`cssModules`)
- **测试**
  单元测试使用`jest+enzyme`
  e2e（端到端）ui 测试使用`jest+puppeteer`
  运行命令：`npm run test:js`和`npm run test:ui`

- **代码风格和校验**
  代码风格采用`prettier`，语法检查校验采用`eslint`

- **git 提交校验**
  采用`husky`+`lint-staged`

#### 性能优化

- **代码分隔**
  通过`React.lazy和React.Suspense`+`webpack import()`方式
  实现组件的动态导入和按需加载
- **dll 化**
  一些长久不变的包，使用了 dll 静态化，如果`app/resource/dll`下没有文件，则执行`npm run createDll`创建，再`npm start`启动项目

### 目录文件介绍

- .vscode -- vscode 编辑器相关配置
- app -- 源码
  - api -- api 相关目录
    - base.js -- api 基类，提供 ajax 方法以及返回数据判断
    - User.js -- 示例，和用户相关的 api 都在这里，如登录登出，可通过 Mock 装饰器模拟数据返回
  - components -- 存放公用组件
    - store -- 通过 react 的`context`实现的简版 redux
    - transition -- 过度组件（待完善）
  - config -- 存放配置目录
    - base.js -- 基础配置，如 api host，请求超时时间，菜单，启用 Mock 等
    - code.js -- 一些通用码配置
  - Mock -- 存放 mock 数据文件
    - base.js -- mock 的返回数据判断
    - User -- 示例，用户类数据模拟
  - pages -- 存放页面业务逻辑
    - base --基础页面，如头部，左侧菜单
    - login --登录页面
    - list -- 列表页
    - single -- 独立页
  - resource -- 存放资源文件，如图片，视频等
  - style -- 存放样式
    - base.less --基础样式，公共样式
    - theme -- 主题目录，定义一些公共样式
    - login --登录页面样式
  - utils -- 存放公用工具
    - ajax.js --ajax 实现，采用`axios`库
  - client.js -- 入口文件
  - index.html -- html 模板文件
- scripts -- webpack 打包工具配置脚本
- .babelrc.js -- babel 配置文件，版本 babel>=7
- .eslintrc.js -- eslint 配置文件
- jsconfig.json -- 当在 webpack 配置了`alias`时，这个文件可以解决导入相关包无法自动提示的问题（在 vscode 中可行）
- postcss.config.js -- postcss 配置文件
- prettier.config.js -- prettier 配置文件

### 支持浏览器

- 良好支持：**IE11; EDGE; chrome21+; safari6.1+;firefox28+**
- 有些许问题，主要是老式`flexbox`语法问题和`antd`兼容性原因:**IE9+; EDGE; chrome4+; safari3.1+;firefox2+**

### 关于测试

#### e2e 测试

运行`npm run test:ui`前，需要确保`'./.local-chromium/win64-737027/chrome-win/chrome.exe'`有这个路径，没有的话，可以联系我或者自己下载

`npm run test:ui`运行完成后，会在项目根路径下生成`test_logs`文件夹，存放测试报告。

`jest`官方文档：[jest.io](https://jestjs.io/docs/en/cli)

`puppeteer`官方文档：[puppeteer](https://github.com/puppeteer/puppeteer/blob/master/docs/api.md#puppeteerlaunchoptions)

### 其它说明

- 有什么建议或问题随时和我交流
- 使用到的 vscode 插件：
  - 文件头部修改信息：`vscode-fileheader`
  - `ESLint`
  - `Prettier`
  - `CSS Modules`
  - `Beautify css/sass/scss/less`

### 走过的坑

- webpack4.x 升级到 webpack5.x

  webpack-dev-server 无法使用热加载(hmr)问题

  通过在 webpack.base.config.js 中加入`target:"web"`配置解决

  详情：https://github.com/webpack/webpack-dev-server/issues/2758

- 热加载功能更换包

  之前是使用`react-hot-loader`+`@hot-loader/react-dom`配置使用热加载

  现在换成了`react-refresh`启用热加载功能

  换后打包遇到了`$RefreshReg$ is not defined`的错误，原因是`react-refresh`不需要再 production 环境使用，`webpack.base.config.js`区分下环境就行。详情：https://github.com/pmmmwh/react-refresh-webpack-plugin/issues/176
