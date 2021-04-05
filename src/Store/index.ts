import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { checkNewAccountEpic, loginAccountEpic, newAccountEpic } from "./src/epic/src/account.epic";
import rootReducer from "./src/reducer";

export const rootEpic = combineEpics(newAccountEpic, loginAccountEpic, checkNewAccountEpic);
const epicMiddleWare = createEpicMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [epicMiddleWare],
});

epicMiddleWare.run(rootEpic);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
