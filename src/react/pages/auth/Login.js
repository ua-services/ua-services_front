import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Button } from "antd";
import "antd/dist/antd.css";

import { useForm } from "react-hook-form";

import Input from "../../components/Input";

import {
  loginRequest
} from "../../../redux/auth/authActions";


const Login = props => {
  const required = "Поле є обов'язковим";
  const inputsConfig = [
    { type: "email", name: "email", placeholder: "Електронний Адрес", validate: { required } },
    { type: "password", name: "password", placeholder: "Пароль", validate: { required } },
  ];

  const { register, handleSubmit, errors, setValue, watch, setError } = useForm();

  const onChange = name => ({ target }) => {
    setValue(name, target.value)
  };

  const onSubmit = inputData => {
    props.loginRequest({ user: inputData }, props.history);
  };

  useEffect(() => {
    if (props.errors) {
      Object.keys(props.errors).forEach(key => {
        if (typeof props.errors[key] === "object") setError(key, "notMatch", props.errors[key].join(""));
      });
    }
  }, [props.errors]);

  const renderInput = (inputProps = {}) => {
    return (
      <Input
        { ...{
          register, errors,
          watch, onChange,
          ...inputProps }
        }
      />
    )
  };


  return (
    <form
      className="auth-form"
      onSubmit={handleSubmit(onSubmit)}>
      {inputsConfig.map(renderInput)}
      <Button
        type="primary"
        className="auth-submit-btn"
        htmlType="submit"
      >
        Увійти
      </Button>
      <div className="auth-form-new-acc">
        <span className="auth-form-still-no-acc">
          Досі немає аккаунта?
        </span>
        <span
          onClick={props.openRegister}
          className="auth-form-register">
          Зареєструватися
        </span>
      </div>
    </form>
  )
};



Login.propTypes = {
  openRegister: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  loginRequest
};

export default connect(null, mapDispatchToProps)(Login);
