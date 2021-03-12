import { createReducer } from "@reduxjs/toolkit";
import { ActionType } from "typesafe-actions";
import { NEW_ACCOUNT } from "../../action/src/account.action";
import { accountActions } from "../../action/src/account.action";

type accountInfo = {
  id: string;
  isLogin: boolean;
  loginTime?: Date;
};

type AccountReducerActions = ActionType<typeof accountActions>;

const accountState: accountInfo = {
  id: "",
  isLogin: false,
  loginTime: new Date(),
};

const accountReducer = createReducer<accountInfo, AccountReducerActions["newAccount"]>(accountState, {
  [NEW_ACCOUNT]: () => {
    return {
      id: "admin",
      isLogin: false,
    };
  },
});

export default accountReducer;
