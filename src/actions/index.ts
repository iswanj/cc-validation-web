import { actionTypes } from '../constants/ActionTypes';

import { action } from "typesafe-actions";

export const setState = (state: object) => action(actionTypes.SET_STATE, state);