import { createReducer } from "@reduxjs/toolkit";
import { loginComplate, login, newAccount } from "../../action/src/account.action";

const stateInputNewAccount = {
  isLogin: false,
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
    });
});

export default accountReducer;
