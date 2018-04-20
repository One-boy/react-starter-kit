/**
 * 公共包裹，登录后的页面，都有一个公共的头部和左侧导航栏
 */

import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
import {
    Link,
} from 'react-router-dom'
import { Connect } from '@components/store'
const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

@Connect((store) => ({
    config: store.config,
}))
export default class home extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className="main-wrap">
                <Layout>
                    <Header className="header">
                        <div className="logo"><span>后台管理系统</span></div>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="1"><Link to="/nav1">nav 1</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/nav2">nav 2</Link></Menu.Item>
                        </Menu>
                    </Header>
                    <Layout>
                        <Sider width={200} style={{ background: '#fff' }}>
                            <Menu
                                mode="inline"
                                theme="dark"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%', borderRight: 0 }}
                            >
                                <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                                    <Menu.Item key="1">option1</Menu.Item>
                                    <Menu.Item key="2">option2</Menu.Item>
                                    <Menu.Item key="3">option3</Menu.Item>
                                    <Menu.Item key="4">option4</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Layout style={{ padding: '24px' }}>
                            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                                {this.props.children || '无children'}
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </div>

        )
    }
}
