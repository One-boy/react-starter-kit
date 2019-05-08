/*
 * @Author: hy 
 * @Date: 2019-05-07 17:54:26 
 * @Last Modified by: hy
 * @Last Modified time: 2019-05-08 10:09:57
 */


//首页

import React, { Component } from 'react'
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Row,
  Col,
  Button
} from 'framework7-react'


export default class HomePage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Page>
        <Navbar>
          <NavLeft>
            <Link iconIos="f7:Left" iconMd="material:Left" panelOpen="left"></Link>
          </NavLeft>
          <NavTitle>我的APP</NavTitle>
          <NavRight>
            <Link iconIos="f7:Right" iconMd="material:Right" panelOpen="right"></Link>
          </NavRight>
        </Navbar>
        <Toolbar bottom>
          <Link>Left Link</Link>
          <Link>Right Link</Link>
        </Toolbar>
        <Block strong>
          <p>Here is your blank Framework7 app.lets see what we have here.</p>
        </Block>
        <BlockTitle>Navigation</BlockTitle>
        <List>
          <ListItem link="/about/" title="About"></ListItem>
          <ListItem link="/form/" title="Form"></ListItem>
        </List>
        <BlockTitle>Modals</BlockTitle>
        <Block strong>
          <Row>
            <Col width="50">
              <Button fill raised popupOpen="#popup">Popup</Button>
            </Col>
            <Col width="50">
              <Button fill raised loginScreenOpen="#login-screen">去登录</Button>
            </Col>
          </Row>
        </Block>
        <BlockTitle>Panels</BlockTitle>
        <Block strong>
          <Row>
            <Col width="50">
              <Button fill raised panelOpen="left">Left Panel</Button>
            </Col>
            <Col width="50">
              <Button fill raised panelOpen="right">Right Panel</Button>
            </Col>
          </Row>
        </Block>
        <List>
          <ListItem link="/dynamic-route/blog/45/post/125/?foo=bar#about" title="Dynamic Route"></ListItem>
          <ListItem link="/load-something-that-doesnt-exist/" title="Default Route (404)"></ListItem>
        </List>
      </Page>
    )
  }
}