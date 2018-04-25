import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { LocaleProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import {
  HashRouter as Router,
  withRouter,
} from 'react-router-dom'
import { Provider as StoreProvider } from './components/store'
import './style/index.js'

const AppWithRouter = withRouter(App)
// 全局store初始值
const store = {}

ReactDOM.render(
  <StoreProvider store={store}>
    <LocaleProvider locale={zh_CN}>
      <Router>
        <AppWithRouter />
      </Router>
    </LocaleProvider>
  </StoreProvider>
  ,
  document.getElementById('root')
)