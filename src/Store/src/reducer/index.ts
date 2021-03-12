import { combineReducers } from "@reduxjs/toolkit";
import accountReducer from "./src/account.reducer";

const rootReducer = combineReducers({
  accountReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
