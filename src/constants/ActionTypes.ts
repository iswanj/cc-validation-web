export enum actionTypes {
  SET_STATE = "@@app/SET_STATE",
  SAVE_PAYMENT = "@@app/SAVE_PAYMENT"
}

export interface IAppState {
  readonly loading: boolean;
  readonly error?: string;
}
