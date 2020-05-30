import React from "react";
import PropTypes from "prop-types";

import { Input as InputAnt } from "antd";

const Input = props => {
  const {
    name, placeholder, validate,
    register, watch, errors,
    onChange, ...inputProps
  } = props;

  return (
    <div
      key={name}
      className="auth-login--input-container">
      <label
        className="input-label"
      >
        {`${placeholder} ${validate ? "*" : ""}`}
      </label>
      <InputAnt
        {...inputProps}
        ref={register({ name }, validate)}
        value={watch(name)}
        onChange={onChange(name)}
        className="input-field"
      />
      {
        errors[name] &&
        <span className="input-error">
          {errors[name].message}
        </span>
      }
    </div>
  )
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  validate: PropTypes.object,
  register: PropTypes.func.isRequired,
  watch: PropTypes.func.isRequired,
  errors: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};

export default Input;
