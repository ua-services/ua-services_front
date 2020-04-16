import { all } from "redux-saga/effects";

import authSaga from "./auth/authSaga";
import agency from "./agency/agencySaga";

export default function* rootSaga() {
  yield all([
    authSaga(),
    agency()
  ]);
}
