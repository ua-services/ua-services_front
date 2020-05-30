import React, { useState } from "react";
import PropTypes from "prop-types";

import { Modal } from "antd";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

const TopBar = () => {
  const [isLoginModalActive, setIsLoginModalActive] = useState(false);
  const [isRegisterModalActive, setIsRegisterModalActive] = useState(false);

  const menuItems = [
    "Обрати послугу",
    "Обрати сервіс",
    "Рейтинг",
    "Дата",
    "Час"
  ];

  const renderMenuItem = item => {
    return (
      <div>
        <span
          key={item}
          className="header-menu-options-option">
          {item}
        </span>
      </div>
    );
  };

  const openRegister = () => {
    setIsRegisterModalActive(true);
    setIsLoginModalActive(false);
  };

  const renderModalButton = () => {
    return (
      <>
        <Modal
          className="auth-modal"
          onCancel={() => setIsLoginModalActive(false)}
          title="Авторизація"
          visible={isLoginModalActive}
          footer={null}
        >
          <Login
            { ...{ openRegister } }
          />
        </Modal>
        <Modal
          className="auth-modal"
          onCancel={() => setIsRegisterModalActive(false)}
          title="Реєстрація"
          visible={isRegisterModalActive}
          footer={null}
        >
        <Register/>
      </Modal>
      </>
    )
  };

  return (
    <div
      className="header-menu"
    >
      <h2 className="header-logo">
        ЛОГО
      </h2>
      <div className="header-menu-options">
        {menuItems.map(renderMenuItem)}
      </div>
      <div
        className="header--text"
      >
         <span
           onClick={() => setIsLoginModalActive(true)}
         >
           Вхід
         </span>
        <span> | </span>
          <span
            onClick={() => setIsRegisterModalActive(true)}
          >
            Реєстрація
          </span>
      </div>
      {renderModalButton()}
    </div>
  )
};

TopBar.propTypes = {
  history: PropTypes.object.isRequired
};



export default TopBar;
