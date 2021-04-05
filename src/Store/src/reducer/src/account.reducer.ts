import { createReducer } from "@reduxjs/toolkit";
import { checkNewAccountId, finishCheck, login, loginComplate, newAccount } from "../../action/src/account.action";

const stateInputNewAccount = {
  isLogin: false,
  loading: false,
  complatemessage: ""
};

const accountReducer = createReducer(stateInputNewAccount, (build) => {
  build
    .addCase(newAccount, (state, _) => {
      state.isLogin = false;
    })
    .addCase(checkNewAccountId, (state, action) => {
      state.loading = true;
    })
    .addCase(finishCheck, (state, action) => {
      state.loading = false;

      switch (action.payload) {
        case true:
          state.complatemessage = "사용 가능한 아이디 입니다.";
          return;
        case "errCode-01":
          state.complatemessage = "이미 사용중인 아이디 입니다.";
          return;
        case "errCode-02":
          state.complatemessage = "아이디를 입력해 주세요.";
          return;
        default:
          return;
      }
    })
    .addCase(loginComplate, (state, _) => {
      state.isLogin = true;
    })
    .addCase(login, (state, _) => {
      state.isLogin = true;
    });
});

export default accountReducer;
