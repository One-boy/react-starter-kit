
import React from 'react'
import ReactDOM from 'react-dom'
import Framework7React from 'framework7-react'
// Import F7 Bundle
import Framework7 from 'framework7/framework7.esm.bundle.js'
import 'framework7/css/framework7.bundle.css'
import { Provider as StoreProvider } from './components/store'
import './style/index.less'
import App from './App'


// Init F7-React Plugin
Framework7.use(Framework7React)

// 全局store初始值
const store = {}
window.Blob = {}

ReactDOM.render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>
  ,
  document.getElementById('root')
)