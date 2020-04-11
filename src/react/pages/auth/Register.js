import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Input, Button } from "antd";
import "antd/dist/antd.css";

import { useForm } from "react-hook-form";

import {
  registerRequest
} from "../../../redux/auth/authActions";


const Register = props => {
  const required = "Field is required";
  const inputsConfig = [
    { name: "email", placeholder: "Email", validate: { required } },
    { name: "first_name", placeholder: "First Name", validate: { required } },
    { name: "last_name", placeholder: "Last Name", validate: { required } },
    { name: "role", placeholder: "Role", validate: { required } },
    { name: "password", placeholder: "Password", validate: { required } },
    { name: "password_confirmation", placeholder: "Password Confirmation", validate: { required } },
  ];

  const { register, handleSubmit, errors, setValue, watch, setError } = useForm();

  const inputOnChange = name => ({ target }) => {
    setValue(name, target.value)
  };

  const onSubmit = inputData => {
    props.registerRequest({ user: inputData });
  };

  useEffect(() => {
    if (props.errors) {
      Object.keys(props.errors).forEach(key => {
        if (typeof props.errors[key] === "object") setError(key, "notMatch", props.errors[key].join(""));
      });
    }
  }, [props.errors]);

  const renderInput = inputProps => {
    const { name, placeholder, validate } = inputProps;

    return (
      <div
        key={name}
        className="auth-login--input-container">
        <label>
          {`${placeholder.toUpperCase()} ${validate ? "*" : ""}`}
        </label>
        <Input
          {...inputProps}
          ref={register({ name }, validate)}
          value={watch(name)}
          onChange={inputOnChange(name)}
        />
        {
          errors[name] &&
          <span className="">
              {errors[name].message}
            </span>
        }
      </div>
    )
  };

  return (
    <div
      className="auth-login">
      <div
        className="auth-login--container"
      >
        <h1>
          Register
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
        >
          {inputsConfig.map(renderInput)}
          <div
            className="auth-login--button-container"
          >
            <Button
              type="primary"
              className="login-form-button"
              htmlType="submit"
            >
              Register
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
};



Register.propTypes = {
  history: PropTypes.object.isRequired,
  registerRequest: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  registerRequest
};

export default connect(null, mapDispatchToProps)(Register);
