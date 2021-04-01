import { Button, Checkbox, Form, Input, Space } from 'antd';
import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../Store';
import { login } from '../../../Store/src/action/src/account.action';
import "../../../style/login.scss";
import { loginCheckType } from '../../../types/account.types';

const Login = () => {
  const dispach = useAppDispatch();

  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 6, span: 16 },
  };

  const onFinish = useCallback((values: loginCheckType) => {
    dispach(login(values));
  }, [dispach]);

  return (
    <div className="login-container">
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: false }}
        onFinish={onFinish}
      >
        <Form.Item
          label="ID"
          name="id"
          rules={[{ message: '아이디를 입력해 주세요.' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ message: '비밀번호를 입력해 주세요.' }]}
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