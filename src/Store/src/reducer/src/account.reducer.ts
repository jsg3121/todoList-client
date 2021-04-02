import { createReducer } from "@reduxjs/toolkit";
import { login, loginComplate, loginFail, newAccount } from "../../action/src/account.action";

const stateInputNewAccount = {
  isLogin: false,
  idCheck: false,
};

const accountReducer = createReducer(stateInputNewAccount, (build) => {
  build
    .addCase(newAccount, (state, _) => {
      state.isLogin = false;
    })
    .addCase(loginComplate, (state, _) => {
      state.isLogin = true;
    })
    .addCase(login, (state, _) => {
      state.isLogin = true;
    })
    .addCase(loginFail, (state, _) => {
      console.log("err");
    });
});

export default accountReducer;
