import React from 'react'
import ReactDOM from 'react-dom'
import { ConfigProvider } from 'antd'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import moment from 'moment'
import 'moment/locale/zh-cn'
import zh_CN from 'antd/lib/locale/zh_CN'
import { HashRouter as Router } from 'react-router-dom'
import { Provider as StoreProvider } from './components/store'
import Index from './pages'
import './style/base.module.less' // 引入全局样式

moment.locale('zh-cn')

// 全局store初始值
const store = {}

ReactDOM.render(
  <StoreProvider store={store}>
    <ConfigProvider locale={zh_CN}>
      <Router>
        <Index />
      </Router>
    </ConfigProvider>
  </StoreProvider>,
  document.getElementById('root')
)
