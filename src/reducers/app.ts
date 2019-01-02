import { Reducer } from "redux";
import { actionTypes, IAppState } from "../constants/ActionTypes";
function setState(state: any, newState: any) {
  return { ...state, ...newState };
}
function clearState() {
  return {};
}

const reducer: Reducer<IAppState> = (state: any = {}, action) => {
  switch (action.type) {
    case actionTypes.SET_STATE:
      return setState(state, action.payload);
    default:
      return state;
  }
};

export default reducer;