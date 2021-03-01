import React from 'react';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import HeaderComponents from '../Components/HeaderComponents';
import { login } from '../Modules/module/loginModule';

const mapStateToProps = (state: { activeLogin: { loginVal: { toString: () => string; }; }; }) => {
  return ({
    loginStatus: state.activeLogin.loginVal
  });
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(
    {
      login
    },
    dispatch
  );

const HeaderContainer = ({ login, loginStatus }: any) => {
  return (
    <HeaderComponents login={login} status={loginStatus} />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);;