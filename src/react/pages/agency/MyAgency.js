import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Card, Button } from "antd";
import {
  ContactsOutlined
} from "@ant-design/icons";
import {
  Map as LeafletMap,
  Marker, Popup,
  TileLayer
} from "react-leaflet";

import {
  getAgencyEmployeesRequest,
  getOwnAgencyRequest,
} from "../../../redux/agency/agencyActions";


const MyAgency = props => {
  const {
    name,
    address,
    phone_number,
    service_industry,
    email,
    short_description,
    lng = 0,
    lat = 0
  } = props.agency;


  useEffect(() => {
    props.getOwnAgencyRequest(1);
    props.getAgencyEmployeesRequest();
  },[]);

  const position = [lat, lng];

  const renderMap = () => {
    return (
      <LeafletMap
        center={position}
        zoom={15}>
        <TileLayer
          attribution="&copy; <a href='http://osm.org/copyrigh'>OpenStreetMap</a> contributors"
          url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br/> Easily customizable.
          </Popup>
        </Marker>
      </LeafletMap>
    )
  };

  const renderHeader = () => (
    <div className="agency--info-header">
      <ContactsOutlined
        style={{
          fontSize: 40
        }}
      />
      <h2>
        {name}
      </h2>
    </div>
  );

  const renderAgencyItem = (field, value) => (
    <div className="agency--info-item">
      <h3>
        {field}:
      </h3>
      <span>
        {value}
      </span>
    </div>
  );

  const goToEditAgency = () => {
    props.history.push("/edit-agency");
  };

  return (
    <div className="agency-layout">
      <Card title={renderHeader()} style={{ width: 700 }}>
        {renderAgencyItem("Address", address)}
        {renderAgencyItem("Phone Number", phone_number)}
        {renderAgencyItem("Service Industry", service_industry)}
        {renderAgencyItem("Email", email)}
        {renderAgencyItem("Short Description", short_description)}
        <Button
          size="large"
          onClick={goToEditAgency}
          type="primary"
          className="agency--info-btn">
          Edit Agency
        </Button>
      </Card>
      <div className="agency--right-content">
        <div
          className="agency--short-decs">
          {short_description}
        </div>
        <div
          style={{
            borderRadius: 5,
            overflow: "hidden",
            width: "100%",
            height: "100%"
          }}
        >
          {renderMap()}
        </div>
      </div>
    </div>
  )
};

MyAgency.propTypes = {
  agency: PropTypes.object.isRequired,
  getAgencyEmployeesRequest: PropTypes.func.isRequired,
  getOwnAgencyRequest: PropTypes.func.isRequired,
};

const mapStateToProps = ({ agency }) => ({
  agency: agency.agency
});

const mapDispatchToProps = {
  getAgencyEmployeesRequest,
  getOwnAgencyRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(MyAgency);
