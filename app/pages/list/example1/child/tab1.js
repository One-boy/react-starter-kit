/*
 * @Author: hy 
 * @Date: 2019-05-05 17:23:01 
 * @Last Modified by: hy
 * @Last Modified time: 2019-05-05 18:18:00
 */

//tab1

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { httpUpload } from '@/api/base'

export default class Tab1 extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.style = {
      paddingTop: 30,
    }
  }

  /**
 * 文件变化
 */
  onFileChange = (e) => {
    const files = e.target.files
    if (files.length) {
      let file = files[0]
      const fd = new FormData()
      fd.append('file', file)
      fd.append('fileName', file.name)
      httpUpload(fd, res => {
        console.log(res)
        if (res.data && res.data.imgFullUrl) {
          this.setState({
            imgUrl: res.data.imgFullUrl,
          })
        }
      })
    }
  }

  render() {
    const { imgUrl } = this.state
    return (
      <div style={this.style}>
        <h3>tab1</h3>
        <input type='file' onChange={this.onFileChange} />
        <div style={{ width: 500 }}>
          <img src={imgUrl} style={{ maxWidth: '100%' }} />
        </div>
      </div>
    )
  }
}