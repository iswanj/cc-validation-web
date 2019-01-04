import formReducer from '../../reducers/form';

import { actionTypes } from '../../constants/ActionTypes';

describe("app reducer", () => {
  it("create a new form in state and save fieds with value", () => {
    const initialState = {};
    const action = {
      type: actionTypes.ON_FIELD_CHANGE,
      payload: {
        form: "test",
        name: "firstName",
        value: "iswan"
      }
    };
    const nextState = formReducer(initialState, action);
    const expectedState = {
      test: {
        firstName: "iswan"
      }
    };
    expect(nextState).toEqual(expectedState);
  });

  it("clear/reset state - remove form from state", () => {
    const initialState = {
      test: {
        firstName: "iswan"
      }
    };

    const action = {
      type: actionTypes.RESET_FORM,
      payload: "test"
    };
    const nextState = formReducer(initialState, action);
    const expectedState = { test: {} };
    expect(nextState).toEqual(expectedState);
  });

});
