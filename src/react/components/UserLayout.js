import React from "react";
import PropTypes from "prop-types";

import TopBar from "./Topbar";
import Footer from "./Footer";

function UserLayout({ children }) {
  const { history } = children.props;

  return (
      <div className="user-content">
        <TopBar
          { ...{ history } }
        />
        { children }
       <Footer/>
      </div>
  );
}

UserLayout.propTypes = {
  children: PropTypes.object
};

export default UserLayout;
