import {
  GET_OWN_AGENCY_REQUEST,
  GET_OWN_AGENCY_SUCCESS,
  GET_OWN_AGENCY_FAILURE,
  GET_AGENCY_EMPLOYEES_REQUEST,
  GET_AGENCY_EMPLOYEES_SUCCESS,
  GET_AGENCY_EMPLOYEES_FAILURE
} from "./agencyActionsTypes";


export const getOwnAgencyRequest = payload => ({
  type: GET_OWN_AGENCY_REQUEST,
  payload,
});

export const getOwnAgencySuccess = payload => ({
  type: GET_OWN_AGENCY_SUCCESS,
  payload,
});

export const getOwnAgencyFailure = payload => ({
  type: GET_OWN_AGENCY_FAILURE,
  payload,
});

export const getAgencyEmployeesRequest = payload => ({
  type: GET_AGENCY_EMPLOYEES_REQUEST,
  payload,
});

export const getAgencyEmployeesSuccess = payload => ({
  type: GET_AGENCY_EMPLOYEES_SUCCESS,
  payload,
});

export const getAgencyEmployeesFailure = payload => ({
  type: GET_AGENCY_EMPLOYEES_FAILURE,
  payload,
});
