import React,{Component} from 'react'
import {Button,Modal} from 'antd'

export default class home extends Component{

    constructor(props){
        super(props)
        this.state={
            text:123,
        }
    }

    click=()=>{
        Modal.confirm({
            title:'确定',
            onOk:()=>{
                this.setState({
                    text:'ok'
                })
            }
        })
        this.setState({
            text:456
        })
    }

    render(){
        return (
            <div>
            <h1 className="home-page">Hello, world!</h1>
            <p>{this.state.text}</p>
            <Button onClick={this.click}>按钮</Button>
          </div>
        )
    }
}