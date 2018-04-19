import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'
import { LocaleProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import {
  HashRouter as Router
} from 'react-router-dom'
import StoreProvider from './components/store'
import './style/index.js'

ReactDOM.render(
  <StoreProvider>
    <Router>
      <LocaleProvider locale={zh_CN}>
        <App />
      </LocaleProvider>
    </Router>
  </StoreProvider>
  ,
  document.getElementById('root')
);