import { Button, Input, Modal, PageHeader, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import React, { useState } from 'react';
import { httpAddUser } from '../../../service';


export interface HeaderProps {
  status?: string;
}


const HeaderComponents: React.FC<HeaderProps> = () => {

  const [loading, setLoading] = useState(false);
  const [visibleLogin, setVisibleLogin] = useState(false);
  const [visibleAddUser, setVisibleAddUser] = useState(false);
  const [userInfo, setUserInfo] = useState({
    id: "",
    password: "",
  });

  const showModal = (e: any) => {
    switch (e.target.innerHTML) {
      case "로그인":
        setVisibleLogin(true);
        break;
      case "회원가입":
        setVisibleAddUser(true);
        break;
      default:
        break;
    }
  };

  const handleChange = (e: any) => {
    if (e.target.type === "text") {
      setUserInfo({ ...userInfo, id: e.target.value });
    } else {
      setUserInfo({ ...userInfo, password: e.target.value });
    }
  };

  const handleOk = () => {
    setLoading(true);
  };

  const handleCancel = () => {
    setVisibleLogin(false);
    setVisibleAddUser(false);
  };


  const loginCheck = async () => {
    setLoading(true);
  };

  const addUser = async () => {
    setLoading(true);
    const result = await httpAddUser(userInfo);
    if (result) {
      setLoading(true);
      alert("회원가입이 완료되었습니다.");
      window.location.reload();
    }
  };

  return (
    <header>
      <PageHeader ghost={false} title="What Are You Doing Totay?" extra={[
        <Button key="1" onClick={showModal} size={'middle'} datatype="aa">
          로그인
        </Button>,
        <Button key="2" onClick={showModal} size={'middle'}>
          회원가입
        </Button>
      ]}></PageHeader>

      <Modal visible={visibleLogin} title="Login" onOk={handleOk} onCancel={handleCancel} footer={[
        <Button key="back" onClick={handleCancel}>Cancel</Button>,
        <Button key="submit" type="primary" loading={loading} onClick={loginCheck}>Login</Button>
      ]}>
        <Space direction="vertical" size="large" className="input-login">
          <Input size="middle" placeholder="아이디를 입력해주세요." className="input-login__id"></Input>
          <Input.Password size="middle" placeholder="비밀번호를 입력해주세요." className="input-login__password" iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}></Input.Password>
        </Space>
      </Modal>
      <Modal visible={visibleAddUser} title="회원가입" onOk={handleOk} onCancel={handleCancel} footer={[
        <Button key="back" onClick={handleCancel}>Cancel</Button>,
        <Button key="submit" type="primary" loading={loading} onClick={addUser}>가입하기</Button>
      ]}>
        <Space direction="vertical" size="large" className="input-login">
          <Input size="middle" placeholder="아이디를 입력해주세요." className="input-login__id" onChange={handleChange}></Input>
          <Input.Password size="middle" placeholder="비밀번호를 입력해주세요." className="input-login__password" onChange={handleChange} iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}></Input.Password>
        </Space>
      </Modal>
    </header>
  );
};

export default HeaderComponents;