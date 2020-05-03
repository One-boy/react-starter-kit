# 基于react PC端的中后台开发基础脚手架
### 技术栈及环境
- `react@16.13.x+webpack@4.x+antd@3.x+react-router-dom@5.x`
- antd使用`babel-plugin-import`按需加载
- `node v10.12.0`
- `npm v6.4.1`

### 安装
- git clone 本项目
- npm install
  - 注意：安装时会下载chrommium包，如果不需要下载：请使用环境变量`PUPPETEER_SKIP_CHROMIUM_DOWNLOAD`
  - windows git bash使用：`export PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=1`，然后`npm install`
- 前提：npm run createDll  -- 执行dll静态化公共库
- 开发：npm start
- 打包：npm run build
- 测试：
  - js:npm run test:js
  - ui：npm run test:ui

### 使用说明
- 样式：预编译采用`Less`，模块化启用了`cssModules`
- 测试：单元测试使用`jest+enzyme`，e2e（端到端）ui测试使用`jest+puppeteer`
   - 运行命令：`npm run test:js`和`npm run test:ui`
- 代码分隔：支持通过`React.lazy和Suspense`方式组件实现动态导入
- dll化：一些长久不变的包，使用了dll静态化，如果`app/resource/dll`下没有文件，则执行`npm run createDll`创建，再`npm start`启动项目

### 目录文件介绍

- .vscode  -- vscode编辑器相关配置
- app -- 源码
  - api -- api相关目录
    - base.js -- api基类，提供ajax方法以及返回数据判断
    - User.js -- 示例，和用户相关的api都在这里，如登录登出，可通过Mock装饰器模拟数据返回
  - components -- 存放公用组件
    - store -- 通过react的`context`实现的简版redux
    - transition  -- 过度组件（待完善）
  - config --  存放配置目录
    - base.js -- 基础配置，如api host，请求超时时间，菜单，启用Mock等
    - code.js -- 一些通用码配置
  - Mock -- 存放mock数据文件
    - base.js -- mock的返回数据判断
    - User -- 示例，用户类数据模拟
  - pages -- 存放页面业务逻辑
    - base --基础页面，如头部，左侧菜单
    - login  --登录页面
    - list -- 列表页
    - single -- 独立页
  - resource -- 存放资源文件，如图片，视频等
  - style --  存放样式
    - base.less --基础样式，公共样式
    - theme -- 主题目录，定义一些公共样式
    - login --登录页面样式
  - utils -- 存放公用工具
    - ajax.js --ajax实现，采用`axios`库
  - client.js -- 入口文件
  - icons.js -- antd的icon文件手动引入
  - index.html -- html模板文件
- scripts -- webpack打包工具配置脚本
- .babelrc.js -- babel配置文件，版本babel>=7
- .eslintrc.js -- eslint配置文件
- jsconfig.json -- 挡在webpack配置了`alias`时，这个文件可以解决导入相关包无法自动提示的问题（在vscode中可行）
- postcss.config.js -- postcss配置文件

### 支持浏览器
- 良好支持：**IE10+; EDGE;  chrome21+; safari6.1+;firefox28+**
- 有少许问题，主要是老式`flexbox`语法问题:**IE9+; EDGE;  chrome4+; safari3.1+;firefox2+**

### 关于测试
#### e2e测试
运行`npm run test:ui`前，需要确保`'./.local-chromium/win64-737027/chrome-win/chrome.exe'`有这个路径，没有的话，可以联系我或者自己下载

`npm run test:ui`运行完成后，会在项目根路径下生成`test_logs`文件夹，存放测试报告。

### 其它说明
- 有什么建议或问题随时和我交流
- 使用到的vscode插件：  
  - 文件头部修改信息：`vscode-fileheader`
  - `ESLint`
  - `CSS Modules`
  - `Beautify css/sass/scss/less`