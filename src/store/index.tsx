import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../reducers';
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

const store = configureStore({
  reducer: rootReducer(history),
});
export type RootState = ReturnType<typeof store.getState>;
export {history};
export default store;