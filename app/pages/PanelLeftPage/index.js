/*
 * @Author: hy 
 * @Date: 2019-05-07 17:54:26 
 * @Last Modified by: hy
 * @Last Modified time: 2019-05-08 09:56:52
 */


//左侧面板

import React, { Component } from 'react'
import { Page, Navbar, Block, BlockTitle, List, ListItem } from 'framework7-react'

export default class PanelLeftPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Page>
        <Navbar title="Left Panel" />
        <Block strong>
          <p>Left panel content goes here</p>
        </Block>
        <BlockTitle>Load page in panel</BlockTitle>
        <List>
          <ListItem link="/about/" title="About"></ListItem>
          <ListItem link="/form/" title="Form"></ListItem>
        </List>
        <BlockTitle>Load page in main view</BlockTitle>
        <List>
          <ListItem link="/about/" title="About" view="#main-view" panelClose></ListItem>
          <ListItem link="/form/" title="Form" view="#main-view" panelClose></ListItem>
        </List>
      </Page>
    )
  }
}