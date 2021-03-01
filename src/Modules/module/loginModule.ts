import { createAction, handleActions } from "redux-actions";

const LOGIN = "loginModule/LOGIN";

export const login = createAction(LOGIN);

const isLogin = {
  loginVal: false,
};

const activeLogin = handleActions(
  {
    [LOGIN]: (state, action) => {
      return {
        loginVal: !state.loginVal,
      };
    },
  },
  isLogin
);

export default activeLogin;
