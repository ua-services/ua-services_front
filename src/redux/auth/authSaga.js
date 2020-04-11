import { Cookies } from "react-cookie";
import { all, put, call, takeLatest } from "redux-saga/effects";

import auth from "../../api/auth";

import {
  LOGIN_REQUEST,
  REGISTER_REQUEST
} from "./authActionsTypes";
import {
  loginSuccess,
  loginFailure,
  registerSuccess,
  registerFailure
} from "./authActions";

const setSession = user => {
  const cookies = new Cookies();
  if (user) cookies.set("user", JSON.stringify(user), { path: "/" });
  else cookies.remove("user")
};


function *login({ payload, history }) {
  try {
    const response = yield call(auth.login, payload);
    setSession(response);
    yield call(() => history.push("user"));
    yield put(loginSuccess(response));
  } catch (error) {
    console.log(error);
    yield put(loginFailure(error));
  }
}

function *register({ payload }) {
  try {
    yield call(auth.register, payload);
    yield put(registerSuccess());
  } catch (error) {
    yield put(registerFailure(error));
  }
}


export default function *() {
  yield all([
    yield takeLatest(LOGIN_REQUEST, login),
    yield takeLatest(REGISTER_REQUEST, register),
  ])
}
