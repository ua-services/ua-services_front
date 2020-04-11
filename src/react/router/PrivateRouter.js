
import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";

import {getLoggedInUser, isUserAuthenticated} from "../../helpers/authUtils";

const PrivateRoute = ({ component: Component, roles, ...rest }) => (
  <Route {...rest} render={props => {
    const isAuthTokenValid = isUserAuthenticated();
    if (!isAuthTokenValid) {
      return <Redirect to={{ pathname: "/login", state: { from: props.location } }}/>;
    }

    const loggedInUser = getLoggedInUser();
    if (roles && roles.indexOf(loggedInUser.role) === -1) {
      return <Redirect to={{ pathname: "/login" }}/>;
    }

    return <Component {...props} />;
  }}/>
);

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  roles: PropTypes.array,
  location: PropTypes.object,
};

export default PrivateRoute;
