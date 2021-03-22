import { Button, Form, Input, Select, Space } from 'antd';
import React from 'react';
import '../../../style/newAccount.scss';

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
          rules={[{ required: true, message: '영문으로 된 아이디를 입력해주세요.', pattern: /^[a-zA-Z0-9]*$/gi }]}>
          <Input placeholder="아이디를 입력해 주세요" />
        </Form.Item>
        <Form.Item
          label="비밀번호"
          name="비밀번호"
          rules={[{ required: true, message: '소문자 또는 대문자와 숫자를 이용하여 생성해 주시기 바랍니다.', pattern: /^[a-zA-Z0-9]*$/gi }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="비밀번호 확인"
          name="비밀번호 확인"
          rules={[{ required: true, message: '소문자 또는 대문자와 숫자를 이용하여 생성해 주시기 바랍니다.', pattern: /^[a-zA-Z0-9]*$/gi }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="닉네임"
          name="닉네임"
          rules={[{ required: true, message: '닉네임을 입력해 주세요' }]}>
          <Input placeholder="화면에 표시될 닉네임을 입력해 주세요." />
        </Form.Item>
        <Form.Item label="생년월일">
          <Space>
            <Select defaultValue="Year">
              {
                [...Array(50)].map((list, index) => {
                  return (
                    <Select.Option key={index + 1} value={getYear - index}>{getYear - index}</Select.Option>
                  );
                })
              }
            </Select>
            <Select defaultValue="Month">
              {
                [...Array(12)].map((list, index) => {
                  return (
                    <Select.Option key={index + 1} value={index + 1}>{index + 1}</Select.Option>
                  );
                })
              }
            </Select>
            <Select defaultValue="Day">
              {
                [...Array(31)].map((list, index) => {
                  return (
                    <Select.Option key={index + 1} value={index + 1}>{index + 1}</Select.Option>
                  );
                })
              }
            </Select>
          </Space>
        </Form.Item>
        <Form.Item
          label="휴대전화"
          name="휴대전화"
          rules={[{ message: "비밀번호 형식이 올바르지 않습니다.", pattern: /^ 01(?: 0 | 1 | [6 - 9]) - (?:\d{3}|\d{4}) - \d{4}$/ }]}
        >
          <Input
            placeholder="'-'를 제외한 번호를 입력해 주세요."
            maxLength={11}
          />
        </Form.Item>
        <Form.Item
          label="이메일"
          name="이메일"
        >
          <Input type="email" />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 3 }} className="container--submit-button">
          <Button type="primary" htmlType="submit">
            가입하기
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default newAccount;