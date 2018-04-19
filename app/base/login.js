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

    login = () => {
        this.props.history && this.props.history.push('/')
    }

    render() {
        return (
            <div className="login-wrap">
                <h2>Login</h2>
                <Button onClick={this.login}>登录</Button>
            </div>
        )
    }
}
