import {
  GET_OWN_AGENCY_REQUEST,
  GET_OWN_AGENCY_SUCCESS,
  GET_OWN_AGENCY_FAILURE,
  GET_AGENCY_EMPLOYEES_REQUEST,
  GET_AGENCY_EMPLOYEES_SUCCESS,
  GET_AGENCY_EMPLOYEES_FAILURE
} from "./agencyActionsTypes";


const initialState = {
  agency: {},
  loading: false,
  errors: null,
};

const agency = (state = initialState, action) => {
  switch (action.type) {
    case GET_AGENCY_EMPLOYEES_REQUEST:
    case GET_OWN_AGENCY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_AGENCY_EMPLOYEES_FAILURE:
    case GET_OWN_AGENCY_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case GET_OWN_AGENCY_SUCCESS:
      return {
        ...state,
        loading: false,
        agency: action.payload,
      };
    case GET_AGENCY_EMPLOYEES_SUCCESS:
      return {
        ...state,
        loading: false,
        agency: {
          ...state.agency,
          employees: action.payload
        },
      };

    default:
      return state;
  }
};

export default agency;
