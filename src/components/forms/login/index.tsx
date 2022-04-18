import React from "react"
import {Form, Input, Button} from "antd"
import {UserOutlined, LockOutlined} from "@ant-design/icons"

import "./style.scss"

const LoginForm: React.FC = () => {
  const [form] = Form.useForm()

  return (
    <Form
      form={form}
      name="login"
      className="login-form"
      initialValues={{remember: true}}
    >

      <Form.Item
        name="username"
        rules={[{required: true, message: 'Please input your Username!'}]}
      >
        <Input
          prefix={<UserOutlined/>}
          placeholder="Username"
          autoComplete="off"
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{required: true, message: 'Please input your Password!'}]}
      >
        <Input
          prefix={<LockOutlined/>}
          type="password"
          placeholder="Password"
          autoComplete="off"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>

    </Form>
  )
}

export default LoginForm
