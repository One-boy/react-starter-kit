import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home'
import './style/index.less'
import {LocaleProvider}from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'


ReactDOM.render(
  <LocaleProvider locale={zh_CN}>
    <Home/>
  </LocaleProvider>
 ,
  document.getElementById('root')
);