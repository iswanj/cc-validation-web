import appReducer from '../../reducers/app';

import { actionTypes } from '../../constants/ActionTypes';

describe("app reducer", () => {
  it("create a new state", () => {
    const initialState = {};
    const action = { type: actionTypes.SET_STATE, payload: { newstate: "hello" } };
    const nextState = appReducer(initialState, action);
    expect(nextState).toEqual({ newstate: "hello" });
  });

  it("should create new not replace previous state", () => {
    const initialState = { newstate: "hello" };
    const action = { type: actionTypes.SET_STATE, payload: { newstate2: "world" } };
    const nextState = appReducer(initialState, action);
    expect(nextState).toEqual({ newstate: "hello", newstate2: "world" });
  });
});
