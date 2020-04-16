import { combineReducers } from "redux";

import auth from "../redux/auth/authReducer"
import agency from "../redux/agency/agencyReducer"

export default combineReducers({
  auth,
  agency
});
