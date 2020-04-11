import React from "react";
import PropTypes from "prop-types";

function UserLayout({ children }) {
  return (
      <div className="user-content">
        { children }
      </div>
  );
}

UserLayout.propTypes = {
  children: PropTypes.object
};

export default UserLayout;
