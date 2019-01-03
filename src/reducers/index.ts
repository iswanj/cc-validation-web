import { combineReducers } from "redux";
// import reducers
import app from "./app";
import form from "./form";

const appReducer = combineReducers({
  app,
  form
});

interface Iaction {
  type: string;
  state: object;
}
const rootReducer = (state: any = {}, action: Iaction) => {
  if (action.type === "USER_LOGOUT") {
    state = {};
  }
  return appReducer(state, action);
};
export default rootReducer;
