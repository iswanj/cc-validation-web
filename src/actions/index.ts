// Since there are only few actions, I'm keeping a single file for action creators
import { actionTypes } from '../constants/ActionTypes';

import { action } from "typesafe-actions";

export const setState = (state: object) => action(actionTypes.SET_STATE, state);