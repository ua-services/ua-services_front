import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_FAILURE,
} from "./authActionsTypes";

import { getLoggedInUser } from "../../helpers/authUtils"

const initialState = {
  user: getLoggedInUser(),
  loading: false,
  errors: null
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_FAILURE:
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default auth;
