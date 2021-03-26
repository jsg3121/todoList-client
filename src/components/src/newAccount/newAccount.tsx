import { Button, Form, Input, Select, Space, Spin } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../Store';
import { newAccount } from '../../../Store/src/action/src/account.action';
import '../../../style/newAccount.scss';

const NewAccount = () => {
  const [password, setPassword] = useState(RegExp(""));
  const [birthYear, setBirthYear] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [loading, setLoading] = useState(false);
  const getYear = new Date().getFullYear();

  const isLogin = useAppSelector(state => {
    return state.accountReducer.isLogin;
  });

  useEffect(() => {
    if (isLogin) {
      setLoading(false);
    }
  }, [isLogin]);

  const dispatch = useAppDispatch();

  const inputPasswordHandler = useCallback((e: any) => {
    const pattern = `^${e.target.value}$`;
    setPassword(RegExp(pattern));
  }, []);

  const finishFromHandler = useCallback((e: any) => {
    e.birthDate = `${birthYear}${birthMonth}${birthDay}`;
    setLoading(true);
    dispatch(newAccount(e));
  }, [birthDay, birthMonth, birthYear, dispatch]);

  return (
    <div className="newAccount-container">
      <Spin tip="Loading..." spinning={loading}>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          onFinish={finishFromHandler}
        >
          <Form.Item
            label="아이디"
            name="id"
            rules={[{ required: true, message: '영문으로 된 아이디를 입력해주세요.', pattern: /^[a-zA-Z0-9]*$/gi }]}>
            <Input placeholder="아이디를 입력해 주세요" />
          </Form.Item>
          <Form.Item
            label="비밀번호"
            name="password"
            rules={[{ required: true, message: '소문자 또는 대문자와 숫자를 이용하여 생성해 주시기 바랍니다.', pattern: /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)\S{6,}$/ }]}
          >
            <Input.Password onChange={inputPasswordHandler} />
          </Form.Item>
          <Form.Item
            label="비밀번호 확인"
            name="비밀번호 확인"
            rules={[{ required: true, message: '비밀번호가 일치하지 않습니다.', pattern: password }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="닉네임"
            name="nickName"
            rules={[{ required: true, message: '닉네임을 입력해 주세요' }]}>
            <Input placeholder="화면에 표시될 닉네임을 입력해 주세요." />
          </Form.Item>
          <Form.Item label="생년월일" name="birthDate">
            <Space>
              <Select defaultValue="Year" onChange={(e) => setBirthYear(e)}>
                {
                  [...Array(50)].map((_, index) => {
                    return (
                      <Select.Option key={index + 1} value={getYear - index}>{getYear - index}</Select.Option>
                    );
                  })
                }
              </Select>
              <Select defaultValue="Month" onChange={(e) => setBirthMonth(e)}>
                {
                  [...Array(12)].map((_, index) => {
                    let month = String(index + 1);
                    if (index < 9) {
                      month = "0" + month;
                    }
                    return (
                      <Select.Option key={month} value={month}>{month}</Select.Option>
                    );
                  })
                }
              </Select>
              <Select defaultValue="Day" onChange={(e) => setBirthDay(e)}>
                {
                  [...Array(31)].map((_, index) => {
                    let day = String(index + 1);
                    if (index < 9) {
                      day = "0" + day;
                    }
                    return (
                      <Select.Option key={day} value={day}>{day}</Select.Option>
                    );
                  })
                }
              </Select>
            </Space>
          </Form.Item>
          <Form.Item
            label="휴대전화"
            name="phoneNumber"
            rules={[{ message: "전화번호 형식이 올바르지 않습니다.", pattern: /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/ }]}
          >
            <Input
              placeholder="'-'를 제외한 번호를 입력해 주세요."
              maxLength={11}
            />
          </Form.Item>
          <Form.Item
            label="이메일"
            name="Email"
            rules={[{ message: '이메일 형식이 올바르지 않습니다.', pattern: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i }]}
          >
            <Input type="email" />
          </Form.Item>
          <Form.Item wrapperCol={{ span: 3 }} className="container--submit-button">
            <Button type="primary" htmlType="submit">
              가입하기
          </Button>
          </Form.Item>
        </Form>
      </Spin>
    </div>
  );
};

export default NewAccount;