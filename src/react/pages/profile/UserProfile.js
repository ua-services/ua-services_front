import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Menu } from 'antd';
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons';

import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import { connect } from "react-redux";

const { SubMenu } = Menu;


const UserProfile = props => {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  const getLocationCB = ({ coords }) => {
    const { latitude, longitude } = coords;

    setLat(latitude);
    setLng(longitude);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(getLocationCB);
  }, []);


  const position = [lat, lng];

  return (
    <LeafletMap center={position} zoom={15}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
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

UserProfile.propTypes = {
  user: PropTypes.object.isRequired
};


const mapDispatchToProps = ({ auth }) => ({
  user: auth.user
});

export default connect(mapDispatchToProps)(UserProfile);
