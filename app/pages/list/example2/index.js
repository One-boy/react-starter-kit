/*
 * @Author: hy 
 * @Date: 2019-05-05 17:48:17 
 * @Last Modified by: huyu
 * @Last Modified time: 2019-06-02 22:18:57
 */

// 测试页

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Input, Icon, Button, Card, Table, Pagination } from 'antd'
import AJAXList from '@/api/List'
import { cancelRequest } from '@/utils/ajaxCancel'

@Form.create({})
class test1 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      // 表格数据
      tableData: {
        list: [],
        pageSize: 10,
        pageNo: 1,
        total: 0,
      },
      // 表格loading
      tableLoading: false,
    }
    this.style = {
      height: '100%',
    }
    //canceltoken
    this.CANCEL_TOKEN = 'list/list2'
    // 请求字段
    this.requestBody = {
      pageSize: 10,
      pageNo: 1,
      name: '',
      idCard: '',
      AJAX_CANCEL_TOKEN: this.CANCEL_TOKEN
    }
  }

  static propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
  }

  componentDidMount() {
    this.getList()
  }

  // 获取列表
  getList = async () => {
    this.setState({ tableLoading: true })
    let res = await AJAXList.list2(this.requestBody).catch(() => {
      this.setState({ tableLoading: false })
    })

    if (res) {
      this.setState({ tableData: res.data, tableLoading: false })
    }
  }

  // 点击查询
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (err) {
        return
      }
      console.log('表单数据: ', values)
      this.getList()
    })
  }

  // 点击重置
  onClickReset = () => {
    this.props.form.resetFields()
  }

  // 查看详情
  onClickDetail = (item) => {
    console.log(item)
  }

  // 页大小变化
  onShowSizeChange = (page, pageSize) => {
    this.requestBody.pageSize = pageSize
    this.getList()
  }

  // 页数变化
  onChangePageNo = (current) => {
    this.requestBody.pageNo = current
    this.getList()
  }

  // 取消请求
  onClickCancel = () => {
    cancelRequest(this.CANCEL_TOKEN)
  }

  // 获取头部
  getColums = () => {
    return [
      {
        title: '序号',
        width: '10%',
        key: 'index',
        render: (record, text, index) => (<span key={index}>{index + 1}</span>),
      },
      {
        title: '姓名',
        width: '10%',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '身份证号',
        width: '10%',
        dataIndex: 'idCard',
        key: 'idCard',
      },
      {
        title: '年龄',
        width: '10%',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '操作',
        width: '10%',
        key: 'handler',
        render: (record) => (<p><a onClick={() => this.onClickDetail(record)}>详情</a></p>),
      },
    ]
  }


  render() {
    const { getFieldDecorator } = this.props.form
    const { tableData, tableLoading } = this.state
    return (
      <div style={this.style} className="transform-show">
        <Card bordered={false}>
          <Form layout="inline" onSubmit={this.handleSubmit}>
            <Form.Item >
              {getFieldDecorator('name', {
                rules: [{ required: true, message: '请输入用户名' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="用户名"
                />,
              )}
            </Form.Item>
            <Form.Item >
              {getFieldDecorator('idCard', {
                rules: [{ required: true, message: '请输入身份证号' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="身份证号"
                />,
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" >
                查询
              </Button>
            </Form.Item>
            <Form.Item>
              <Button onClick={this.onClickReset} >
                重置
              </Button>
            </Form.Item>
            <Form.Item>
              <Button onClick={this.onClickCancel} >
                取消请求
              </Button>
            </Form.Item>
          </Form>

          <div style={{ marginTop: 12 }}>
            <Table
              bordered
              pagination={false}
              loading={{ tip: '正在加载数据', spinning: tableLoading }}
              columns={this.getColums()}
              dataSource={tableData.list}

            />
            <Pagination
              showSizeChanger
              pageSize={tableData.pageSize}
              style={{ marginTop: 12, textAlign: 'right' }}
              total={tableData.total}
              showTotal={total => `共 ${total} 条`}
              current={tableData.pageNo}
              onShowSizeChange={this.onShowSizeChange}
              onChange={this.onChangePageNo}
            />
          </div>
        </Card>
      </div>
    )
  }
}

export default test1