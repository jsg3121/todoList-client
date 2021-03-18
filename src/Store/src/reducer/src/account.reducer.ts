import { createReducer } from "@reduxjs/toolkit";
import { newAccount } from "../../action/src/account.action";

type inputNewAccountType = {
  id: string;
  password: string;
};

const inputNewAccount: inputNewAccountType = {
  id: "",
  password: "",
};

const accountReducer = createReducer(inputNewAccount, (build) => {
  build.addCase(newAccount, (state, payload) => {
    const accountInfo: inputNewAccountType = {
      id: payload.payload.id,
      password: payload.payload.password,
    };
    return (state = accountInfo);
  });
});

// const accountReducer = createReducer(accountState, (builder) => {
//   builder.addCase(newAccount, (state, action) => {
//     return;
//   });
// });

export default accountReducer;
