import { Button, Form, Input, Select, Space } from 'antd';
import React from 'react';

const newAccount = () => {

  const getYear = new Date().getFullYear();

  return (
    <div className="newAccount-container">
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
      >
        <Form.Item
          label="아이디"
          name="아이디"
          rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="비밀번호"
          name="비밀번호"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item label="생년월일">
          <Space>
            <Select defaultValue="Year">
              {
                [...Array(50)].map((list, index) => {
                  return (
                    <Select.Option value={getYear - index}>{getYear - index}</Select.Option>
                  );
                })
              }
            </Select>
            <Select defaultValue="Month">
              {
                [...Array(12)].map((list, index) => {
                  return (
                    <Select.Option value={index + 1}>{index + 1}</Select.Option>
                  );
                })
              }
            </Select>
            <Select defaultValue="Day">
              {
                [...Array(31)].map((list, index) => {
                  return (
                    <Select.Option value={index + 1}>{index + 1}</Select.Option>
                  );
                })
              }
            </Select>
          </Space>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 2 }}>
          <Button type="primary" htmlType="submit">
            가입하기
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default newAccount;