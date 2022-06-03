

import { combineReducers } from "@reduxjs/toolkit";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

const rootReducer = (history:unknown) => combineReducers({ router: connectRouter(history) });

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
