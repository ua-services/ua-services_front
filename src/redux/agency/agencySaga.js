import { all, put, call, takeLatest } from "redux-saga/effects";

import agency from "../../api/agency";

import {
  GET_OWN_AGENCY_REQUEST,
  GET_AGENCY_EMPLOYEES_REQUEST,
  EDIT_OWN_AGENCY_REQUEST
} from "./agencyActionsTypes";
import {
  getOwnAgencySuccess,
  getOwnAgencyFailure,
  getAgencyEmployeesSuccess,
  getAgencyEmployeesFailure,
  editOwnAgencySuccess,
  editOwnAgencyFailure
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

function *editEmployeesSage({ payload }) {
  try {
    const response = yield call(agency.editOnwAgency, payload);
    yield put(editOwnAgencySuccess(response));
  } catch (error) {
    yield put(editOwnAgencyFailure(error));
  }
}


export default function *() {
  yield all([
    yield takeLatest(GET_OWN_AGENCY_REQUEST, getOnwAgencySaga),
    yield takeLatest(GET_AGENCY_EMPLOYEES_REQUEST, getEmployeesSage),
    yield takeLatest(EDIT_OWN_AGENCY_REQUEST, editEmployeesSage),
  ])
}
