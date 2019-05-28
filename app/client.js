
import React from 'react'
import ReactDOM from 'react-dom'
import { LocaleProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import {
  HashRouter as Router,
} from 'react-router-dom'
import { Provider as StoreProvider } from './components/store'
import './style/base.less' // 引入全局样式
import Index from './pages'

// 全局store初始值
const store = {}
window.Blob = {}
ReactDOM.render(
  <StoreProvider store={store}>
    <LocaleProvider locale={zh_CN}>
      <Router>
        <Index />
      </Router>
    </LocaleProvider>
  </StoreProvider>
  ,
  document.getElementById('root')
)