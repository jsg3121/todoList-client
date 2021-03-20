import { Button, PageHeader } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
export interface HeaderProps {
  status?: string;
}

const Header: React.FC<HeaderProps> = () => {


  return (
    <header>
      <PageHeader ghost={false} title="What Are You Doing Totay?" extra={[
        <Link to="/login">
          <Button key="1" size={'small'} >
            로그인
        </Button>
        </Link>

      ]} />
    </header>
  );
};

export default Header;