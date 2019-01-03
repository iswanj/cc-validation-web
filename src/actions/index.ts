// Since there are only few actions, I'm keeping a single file for action creators
import { actionTypes } from '../constants/ActionTypes';

import { action } from "typesafe-actions";

export const setState = (state: object) => action(actionTypes.SET_STATE, state);


/// Form related actions
export const onFieldChange = (state: object) => action(actionTypes.ON_FIELD_CHANGE, state);
export const resetForm = (formName: string) => action(actionTypes.RESET_FORM, formName);
export const setFormFields = (form: { name: string; value: object }) =>
  action(actionTypes.SET_FORM_FIELDS, form);