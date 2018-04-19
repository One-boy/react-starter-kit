import React, { Component } from 'react'
import { Button, Modal, message } from 'antd'
import { httpLogin } from '../api/login'


export default class home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            text: 123,
            loading: false,
        }
    }

    click = () => {
        Modal.confirm({
            title: '确定',
            onOk: () => {
                this.login()
            }
        })
    }

    login = () => {
        const reqData = {
            userName: '1233',
            passwd: '12'
        }
        this.setState({
            loading: true,
        });
        [1, 2, 3].forEach(item => {
            const cancel = httpLogin(reqData, (res) => {
                this.setState({
                    text: res.data.token,
                    loading: false,
                })
            }, (err) => {
                this.setState({
                    loading: false,
                })
                console.log(err.msg || err.message)
            })
            setTimeout(() => {
                cancel && cancel()
            }, item * 1000)
        })
    }
    render() {
        return (
            <div>
                <h1 className="home-page" > Hello, world ! </h1>
                <p>{this.state.text}</p>
                <Button loading={this.state.loading} onClick={this.click} > 请求数据 </Button>
            </div>
        )
    }
}