import { Button, Checkbox, Form, Input, Space } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import "../../../style/login.scss";

const Login = () => {

  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 6, span: 16 },
  };

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="login-container">
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Space size={"small"}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Link to="/newAccount">
              <Button type={"default"}>
                회원가입
            </Button>
            </Link>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;