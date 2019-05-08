/*
 * @Author: hy 
 * @Date: 2019-05-07 17:54:26 
 * @Last Modified by: hy
 * @Last Modified time: 2019-05-08 09:57:07
 */


//404页

import React, { Component } from 'react'
import { Page, Navbar, Block } from 'framework7-react'

export default class NotFoundPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Page>
        <Navbar title="Not found" backLink="Back" />
        <Block strong>
          <p>Sorry</p>
          <p>Requested content not found.</p>
        </Block>
      </Page>
    )
  }
}