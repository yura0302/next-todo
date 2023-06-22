import { combineReducers } from "redux";
import TodoReducer from "./todoReducer";

const rootReducer = combineReducers({ TodoReducer });

type ReducerType = ReturnType<typeof rootReducer>;

export default rootReducer;
