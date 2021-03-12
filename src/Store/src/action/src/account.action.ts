import { createAction } from "@reduxjs/toolkit";

export const NEW_ACCOUNT = "accountReducer/NEW_ACCOUNT";

export const newAccount = createAction(NEW_ACCOUNT)();

export const accountActions = { newAccount };
