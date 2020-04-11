import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from "./authActionsTypes";


export const loginRequest = (payload, history) => ({
  type: LOGIN_REQUEST,
  payload,
  history
});

export const loginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginFailure = payload => ({
  type: LOGIN_FAILURE,
  payload,
});

export const registerRequest = payload => ({
  type: REGISTER_REQUEST,
  payload,
});

export const registerSuccess = payload => ({
  type: REGISTER_SUCCESS,
  payload,
});

export const registerFailure = payload => ({
  type: REGISTER_FAILURE,
  payload,
});
