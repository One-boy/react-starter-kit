import {hot} from 'react-hot-loader/root'
import React from 'react'
import ReactDOM from 'react-dom'
import { ConfigProvider } from 'antd'
import zh_CN from 'antd/es/locale/zh_CN'
import {
  HashRouter as Router,
} from 'react-router-dom'
import { Provider as StoreProvider } from './components/store'
import './style/base.less' // 引入全局样式
import Index from './pages'

// 全局store初始值
const store = {}
if (!window.Blob) {
  window.Blob = {}
}

const Routes = hot(()=>(<Router>
  <Index />
</Router>))

ReactDOM.render(
  <StoreProvider store={store}>
    <ConfigProvider locale={zh_CN}>
      <Routes/>
    </ConfigProvider >
  </StoreProvider>
  ,
  document.getElementById('root')
)