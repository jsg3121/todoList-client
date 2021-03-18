import { createAction } from "@reduxjs/toolkit";
import { newAccountType } from "../../../../types/account.types";

export const NEW_ACCOUNT = "accountReducer/NEW_ACCOUNT";

export const newAccount = createAction<newAccountType>(NEW_ACCOUNT);

export const accountActions = { newAccount };
