import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Button, Tabs } from "antd";
import "antd/dist/antd.css";

import { useForm } from "react-hook-form";

import Input from "../../components/Input"

import {
  registerRequest
} from "../../../redux/auth/authActions";


const Register = props => {
  const required = "Поле є обов'язковим";
  const inputsConfig = [
    { name: "email", placeholder: "Email", validate: { required } },
    { name: "first_name", placeholder: "First Name", validate: { required } },
    { name: "last_name", placeholder: "Last Name", validate: { required } },
    { name: "role", placeholder: "Role", validate: { required } },
    { name: "password", placeholder: "Password", validate: { required } },
    { name: "password_confirmation", placeholder: "Password Confirmation", validate: { required } },
  ];

  const { register, handleSubmit, errors, setValue, watch, setError } = useForm();

  const onChange = name => ({ target }) => {
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
    <div className="auth-form">
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane
          tab="Надавати послуги"
          key="1">
          <form
            onSubmit={handleSubmit(onSubmit)}
          >
            {inputsConfig.map(renderInput)}
            <div
              className="auth-login--button-container"
            >
              <Button
                type="primary"
                className="auth-submit-btn"
                htmlType="submit"
              >
                Зареєструватися
              </Button>
            </div>
          </form>
        </Tabs.TabPane>
        <Tabs.TabPane
          tab="Користуватися послугами"
          key="2">
          <form
            onSubmit={handleSubmit(onSubmit)}
          >
            {inputsConfig.map(renderInput)}
            <div
              className="auth-login--button-container"
            >
              <Button
                type="primary"
                className="auth-submit-btn"
                htmlType="submit"
              >
                Зареєструватися
              </Button>
            </div>
          </form>
        </Tabs.TabPane>
      </Tabs>
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
