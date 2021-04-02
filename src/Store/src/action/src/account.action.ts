import { createAction } from "@reduxjs/toolkit";
import { loginCheckType, newAccountType } from "../../../../types/account.types";

export const NEW_ACCOUNT = "accountReducer/NEW_ACCOUNT";
export const LOGIN = "accountReducer/LOGIN";
export const LOGIN_COMPLATE = "accountReducer/LOGIN_COMPLATE";
export const LOGIN_FAIL = "accountReducer/LOGIN_FAIL";

export const newAccount = createAction<newAccountType>(NEW_ACCOUNT);
export const login = createAction<loginCheckType>(LOGIN);
export const loginComplate = createAction<newAccountType | undefined>(LOGIN_COMPLATE);
export const loginFail = createAction<any>(LOGIN_FAIL);

export const accountActions = { newAccount, loginComplate, login, loginFail };
