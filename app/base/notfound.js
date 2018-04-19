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
            <div className="nofound-wrap">
                <h2>404</h2>
            </div>
        )
    }
}
