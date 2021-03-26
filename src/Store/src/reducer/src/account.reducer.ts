import { createReducer } from "@reduxjs/toolkit";
import { addNewAccount, newAccount } from "../../action/src/account.action";

const stateInputNewAccount = {
  isLogin: false,
};

const accountReducer = createReducer(stateInputNewAccount, (build) => {
  build
    .addCase(newAccount, (state, _) => {
      state.isLogin = false;
    })
    .addCase(addNewAccount, (state, _) => {
      state.isLogin = true;
    });
});

export default accountReducer;
