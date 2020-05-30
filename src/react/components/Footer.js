import React from "react";
import PropTypes from "prop-types";

const Footer = () => {
  const menuItems = [
    "Про Нас",
    "Контакти",
    "Пипання і Відповіді",
  ];

  const renderMenuOptions = item => {
    return (
      <span
        key={item}
        className="footer-option">
        {item}
      </span>
    )
  };

  return (
    <div className="footer">
      <div>
        {menuItems.map(renderMenuOptions)}
      </div>
    </div>
  )
};

Footer.propTypes = {
  children: PropTypes.object
};

export default Footer;
