import { Reducer } from "redux";
import { actionTypes, IAppState } from "../constants/ActionTypes";

const setOnChangeData = (
  state: any,
  actionData: {
    form: string;
    name: string;
    value: any;
  }
) => {
  return {
    ...state,
    [actionData.form]: {
      ...state[actionData.form],
      [actionData.name]: actionData.value
    }
  };
};

const setForm = (state: any, form: { name: string; value: object }) => {
  return {
    ...state,
    [form.name]: form.value
  };
};

const resetForm = (state: any, formName: string) => {
  return { ...state, [formName]: {} };
};

const reducer: Reducer<IAppState> = (state: any = {}, action) => {
  switch (action.type) {
    case actionTypes.ON_FIELD_CHANGE:
      return setOnChangeData(state, action.payload);
    case actionTypes.SET_FORM_FIELDS:
      return setForm(state, action.payload);
    case actionTypes.RESET_FORM:
      return resetForm(state, action.payload);
    default:
      return state;
  }
};

export default reducer;
