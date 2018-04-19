import React, { Component } from 'react'
import { Button, Modal, message } from 'antd'
import {
    Route,
    Link,
} from 'react-router-dom'

export default class home extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="nav-wrap">
                <div className="img-wrap">
                    <img src="resource/image/1.jpg" />
                </div>
            </div>
        )
    }
}

