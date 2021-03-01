import { combineReducers } from "redux";
import activeLogin from "./module/loginModule";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  activeLogin,
});

export default persistReducer(persistConfig, rootReducer);
