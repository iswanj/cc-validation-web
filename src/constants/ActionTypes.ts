export enum actionTypes {
  SET_STATE = "@@app/SET_STATE",
  SAVE_PAYMENT = "@@app/SAVE_PAYMENT",
  // form action types
  ON_FIELD_CHANGE = "@@app/ON_FIELD_CHANGE",
  RESET_FORM = "@@app/RESET_FORM"
}

export interface IAppState {
  readonly loading: boolean;
  readonly error?: string;
}
