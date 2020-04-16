import React from "react";
import PropTypes from "prop-types";

import { Menu } from "antd";
import {
  UserOutlined,
  ShopOutlined
} from "@ant-design/icons";

const TopBar = props => {
  const { history: {
    location: {
      pathname
    }
  } } = props;

  return (
    <Menu
      selectedKeys={pathname}
      mode="horizontal"
    >
      <Menu.Item
        key="profile">
        <UserOutlined />
        User Profile
      </Menu.Item>
      <Menu.Item key="my-agency">
        <ShopOutlined />
        My Agency
      </Menu.Item>
    </Menu>
  )
};

TopBar.propTypes = {
  history: PropTypes.object.isRequired
};



export default TopBar;
