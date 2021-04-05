import { createAction } from "@reduxjs/toolkit";
import { loginCheckType, newAccountType } from "../../../../types/account.types";

export const NEW_ACCOUNT = "accountReducer/NEW_ACCOUNT";
export const CHECK_NEW_ACCOUNT_ID = "accountReducer/CHECK_NEW_ACCOUNT_ID";
export const FINISH_CHECK = "accountReducer/FINISH_CHECK";
export const LOGIN = "accountReducer/LOGIN";
export const LOGIN_COMPLATE = "accountReducer/LOGIN_COMPLATE";

export const newAccount = createAction<newAccountType>(NEW_ACCOUNT);
export const checkNewAccountId = createAction<string>(CHECK_NEW_ACCOUNT_ID);
export const finishCheck = createAction<string | boolean>(FINISH_CHECK);
export const login = createAction<loginCheckType>(LOGIN);
export const loginComplate = createAction<newAccountType | undefined>(LOGIN_COMPLATE);

export const accountActions = { newAccount, loginComplate, login, finishCheck, checkNewAccountId };
