import React from "react";
import PropTypes from "prop-types";

import "antd/dist/antd.css";

import SideBar from "./LeftSideBar";
import DashboardMap from "./DashboardMap";

const MainPage = props => {

  return (
    <div className="dashboard">
      <SideBar/>
      <DashboardMap/>
    </div>
  )
};

MainPage.propTypes = {
  history: PropTypes.object.isRequired
};

export default MainPage;
