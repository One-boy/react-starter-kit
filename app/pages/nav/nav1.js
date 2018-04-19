import React, { Component } from 'react'
import { Button, Modal, message } from 'antd'
import {
    Route,
    Link,
} from 'react-router-dom'
import { httpLogin } from '../../api/login'

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
                <h1 className="home-page" > Hello, Nav1 ! </h1>
                <p>{this.state.text}</p>
                <Button loading={this.state.loading} onClick={this.click} > 请求数据 </Button>
                <p><Link to={`${this.props.match.path}/topic1`}>topic1</Link></p>
                <Route path={`${this.props.match.path}/topic1`} component={topic1} />
            </div>
        )
    }
}

const topic1 = (props) => {
    return <div>
        <h2>topic1</h2>
        <br />
        <Button onClick={() => { props.history.goBack() }}>back</Button>
        <Route path={`${props.match.path}/topic2`} component={topic2} />
        <br />
        <Link to={`${props.match.path}/topic2`}>topic2</Link>
    </div>
}

const topic2 = (props) => {
    return <div>
        <h2>topic2</h2>
        <br />
        <Button onClick={() => { props.history.goBack() }}>back</Button>
    </div>
}