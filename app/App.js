/*
 * @Author: hy 
 * @Date: 2019-05-08 09:41:08 
 * @Last Modified by: hy
 * @Last Modified time: 2019-05-08 10:21:49
 */

// App
import React from 'react'
import routes from './routes'
import {
  App,
  Panel,
  View,
  Statusbar,
  Popup,
  Page,
  Navbar,
  NavRight,
  Link,
  Block,
} from 'framework7-react'
import LoginPage from '@pages/LoginPage'

const f7params = {
  // Array with app routes
  routes,
  // App Name
  name: 'My App',
  // App id
  id: 'com.myapp.test',
  // 语言
  language: 'zh-CN',
  //主题
  theme: 'ios',
}


export default (props) => {
  return (
    <App params={f7params}>
      {/* Statusbar */}
      <Statusbar />

      {/* Left Panel */}
      <Panel left cover themeDark>
        <View url="/panel-left/" />
      </Panel>

      {/* Right Panel */}
      <Panel right reveal themeDark>
        <View url="/panel-right/" />
      </Panel>

      {/* Main View */}
      <View id="main-view" url="/" main className="safe-areas" />

      {/* Popup */}
      <Popup id="popup">
        <View>
          <Page>
            <Navbar title="Popup">
              <NavRight>
                <Link popupClose>Close</Link>
              </NavRight>
            </Navbar>
            <Block>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, architecto. Cupiditate laudantium rem nesciunt numquam, ipsam. Voluptates omnis, a inventore atque ratione aliquam. Omnis iusto nemo quos ullam obcaecati, quod.</Block>
          </Page>
        </View>
      </Popup>

      {/* Login Screen */}
      <LoginPage />
    </App>
  )
}