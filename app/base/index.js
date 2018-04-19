import React, { Component } from 'react'
import { Button, Modal, message } from 'antd'
import {
    Link,
} from 'react-router-dom'

export default class home extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className="main-wrap">
                <div className="main-header">
                    header
                    </div>
                <div className="main-body">
                    <div className="main-body-left">
                        <ul>
                            <li><Link to="/nav1">to nav1</Link></li>
                            <li><Link to="/nav2">to nav2</Link></li>
                        </ul>
                    </div>
                    <div className="main-body-content">
                        {this.props.children || '无children'}
                    </div>
                </div>
            </div>
        )
    }
}
