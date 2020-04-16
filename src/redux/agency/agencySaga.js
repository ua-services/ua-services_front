import { all, put, call, takeLatest } from "redux-saga/effects";

import agency from "../../api/agency";

import {
  GET_OWN_AGENCY_REQUEST,
  GET_AGENCY_EMPLOYEES_REQUEST
} from "./agencyActionsTypes";
import {
  getOwnAgencySuccess,
  getOwnAgencyFailure,
  getAgencyEmployeesSuccess,
  getAgencyEmployeesFailure
} from "./agencyActions";


function *getOnwAgencySaga({ payload }) {
  try {
    const response = yield call(agency.getOnwAgency, payload);
    yield put(getOwnAgencySuccess(response));
  } catch (error) {
    yield put(getOwnAgencyFailure(error));
  }
}

function *getEmployeesSage({ payload }) {
  try {
    const response = yield call(agency.getEmployees, payload);
    yield put(getAgencyEmployeesSuccess(response));
  } catch (error) {
    yield put(getAgencyEmployeesFailure(error));
  }
}


export default function *() {
  yield all([
    yield takeLatest(GET_OWN_AGENCY_REQUEST, getOnwAgencySaga),
    yield takeLatest(GET_AGENCY_EMPLOYEES_REQUEST, getEmployeesSage),
  ])
}
