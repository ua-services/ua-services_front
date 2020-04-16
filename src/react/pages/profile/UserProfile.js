import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";


const UserProfile = () => {
  return (
    <div>
      <h1>
        User Profile
      </h1>
    </div>
  )
};

UserProfile.propTypes = {
  user: PropTypes.object.isRequired
};


const mapDispatchToProps = ({ auth }) => ({
  user: auth.user
});

export default connect(mapDispatchToProps)(UserProfile);
