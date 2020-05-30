import React from "react";
import PropTypes from "prop-types";

import { Pagination } from "antd";

import "antd/dist/antd.css";

const SideBar = props => {
  const data = [
    { title: "some title", addres: "sdfa", photo: "photo", time: "sdfsdf" },
    { title: "some title", addres: "sdfa", photo: "photo", time: "sdfsdf" },
    { title: "some title", addres: "sdfa", photo: "photo", time: "sdfsdf" },
    { title: "some title", addres: "sdfa", photo: "photo", time: "sdfsdf" },
    { title: "some title", addres: "sdfa", photo: "photo", time: "sdfsdf" },
    { title: "some title", addres: "sdfa", photo: "photo", time: "sdfsdf" }
  ];

  const renderItem = item => {
    const { title, addres, photo, time } = item;

    return (
      <div
        key={title}
        className="dashboard-left-side-bar-item">
        <span>
          {title}
        </span>
      </div>
    )
  };

  return (
    <div className="dashboard-left-side-bar">
      <div className="dashboard-left-side-bar-items">
        {data.map(renderItem)}
      </div>
      <Pagination
        defaultCurrent={1}
        total={50}
      />
    </div>
  )
};

SideBar.propTypes = {

};

export default SideBar;
