
import 'raf/polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { LocaleProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import {
  HashRouter as Router,
} from 'react-router-dom'
import { Provider as StoreProvider } from './components/store'
import './style/index.less'
import Routes from './routes'

// 全局store初始值
const store = {}
window.Blob = {}
ReactDOM.render(
  <StoreProvider store={store}>
    <LocaleProvider locale={zh_CN}>
      <Router>
        {Routes}
      </Router>
    </LocaleProvider>
  </StoreProvider>
  ,
  document.getElementById('root')
)