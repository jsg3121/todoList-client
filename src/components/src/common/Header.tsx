import { Button, PageHeader } from 'antd';
import React from 'react';
export interface HeaderProps {
  status?: string;
}

const Header: React.FC<HeaderProps> = () => {


  return (
    <header>
      <PageHeader ghost={false} title="What Are You Doing Totay?" extra={[
        <Button key="1" size={'middle'}>
          로그인
        </Button>
      ]} />
    </header>
  );
};

export default Header;