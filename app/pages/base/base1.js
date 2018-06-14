
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { httpUpload } from '@api/base'

export default class base1 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      text: 123,
      loading: false,
    }
    this.style = {
      height: '100%',
      paddingTop: 30,
    }
  }

  static propTypes = {
    location: PropTypes.object.isRequired,
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
        <input type='file' onChange={this.onFileChange} />
        <div style={{ width: 500 }}>
          <img src={imgUrl} style={{ maxWidth: '100%' }} />
        </div>
      </div>
    )
  }
}
