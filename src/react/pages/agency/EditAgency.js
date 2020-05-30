import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

import { Button } from "antd";

import Input from "../../components/Input";

import {
  getOwnAgencyRequest,
  editOwnAgencyRequest
} from "../../../redux/agency/agencyActions";

import {
  Map as LeafletMap,
  Marker, Popup,
  TileLayer
} from "react-leaflet";


const EditAgency = props => {
  const { agency } = props;
  const position = [agency.lat, agency.lng];

  const required = "";
  const inputsConfig = {
    name: { name: "name", placeholder: "Ім'я Агенції", validate: { required } },
    address: { name: "address", placeholder: "Адрес", validate: { required } },
    phone_number: { name: "phone_number", placeholder: "Мобільний номер", type: "number", validate: { required } },
    email: { name: "email", placeholder: "Енектронна Адреса", type: "email", validate: { required } },
    service_industry: { name: "service_industry", placeholder: "Адрес Агенції", validate: { required } },
    short_description: { name: "short_description", placeholder: "Короткий Опис", validate: { required } },
  };

  const { register, handleSubmit, errors, setValue, watch } = useForm({
    defaultValues: agency
  });

  const onChange = name => ({ target }) => {
    setValue(name, target.value)
  };

  const onSubmit = inputData => {
    props.editOwnAgencyRequest({ inputData: inputData }, props.history);
  };

  useEffect(() => {
    props.getOwnAgencyRequest(1);
  }, []);

  useEffect(() => {
    Object.keys(agency).forEach((name) => {
      setValue(name, agency[name]);
    })
  }, [agency]);

  const renderMap = () => {
    return (
      <LeafletMap
        center={position}
        zoom={15}>
        <TileLayer
          attribution="&copy; <a href='http://osm.org/copyrigh'>OpenStreetMap</a> contributors"
          url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker
          draggable={true}
          position={position}>
          <Popup>
            A pretty CSS3 popup. <br/> Easily customizable.
          </Popup>
        </Marker>
      </LeafletMap>
    )
  };


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

  const renderForm = () => {
    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        {renderInput(inputsConfig.name)}
        {renderInput(inputsConfig.address)}
        {renderInput(inputsConfig.email)}
        {renderInput(inputsConfig.phone_number)}
        {renderInput(inputsConfig.service_industry)}
        {renderInput(inputsConfig.short_description)}
        <Button
          type="primary"
          className="login-form-button"
          htmlType="submit"
        >
          Save
        </Button>
      </form>
    )
  };

  return (
   <div className="agency-layout">
     <div>
       <h2>
         Редагувати інформацію агегції
       </h2>
       {agency.name && renderForm()}
     </div>
     {agency.name && renderMap()}
   </div>
  )
};


EditAgency.propTypes = {
  history: PropTypes.object.isRequired,
  getOwnAgencyRequest: PropTypes.func.isRequired,
  editOwnAgencyRequest: PropTypes.func.isRequired
};

const mapStateToProps = ({ agency }) => ({
  agency: agency.agency
});

const mapDispatchToProps = {
  getOwnAgencyRequest,
  editOwnAgencyRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(EditAgency);
