import React from "react";
import PropTypes from "prop-types";
import { Button } from "antd";
import { connect } from "react-redux";


const UserProfile = props => {
  const { user } = props;

  return (
    <div>
      {user.first_name}
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
