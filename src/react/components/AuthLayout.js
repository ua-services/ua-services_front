import React from "react";
import PropTypes from "prop-types";

function AuthLayout({ children }) {
  return (
    <div>
      <div className="auth-content">
        { children }
      </div>
    </div>
  )
}

AuthLayout.propTypes = {
  children: PropTypes.object
};

export default AuthLayout;
