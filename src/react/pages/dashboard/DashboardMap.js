import React from "react";
import PropTypes from "prop-types";

import "antd/dist/antd.css";
import {Map as LeafletMap, Marker, Popup, TileLayer} from "react-leaflet";

const DashboardMap = props => {
  const position = [0, 0];

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

  return (
    <div className="dashboard-map">
      {renderMap()}
    </div>
  )
};

DashboardMap.propTypes = {

};

export default DashboardMap;
