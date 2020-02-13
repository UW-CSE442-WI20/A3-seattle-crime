import React, {useState, Component} from "react";
import styled from "styled-components";
import ReactMapGL, {Marker, Popup} from "react-map-gl";
import LeftContainer from "./LeftContainer";
import DataContainer from "./DataContainer"

export default class Map extends Component {
  state = {
    showPopup: true,
    viewport: {
      latitude: 47.6062,
      longitude: -122.3321,
      width: "100vw",
      height: "95vh",
      zoom: 11.5
    },
    markersLat: null,
    markersLong: null,
  };

_onViewportChange = viewport => this.setState({viewport});
  render() {
    const {showPopup, viewport, markersLat, markersLong} = this.state;
    return (
      <ReactMapGL
          {...viewport}
          mapboxApiAccessToken="pk.eyJ1IjoibXMxOTA3IiwiYSI6ImNrNjhjMXB0eTAzZjUzZm9nbmQzMGc4Y3QifQ.ZuJyRlBq6Wo2l_RPrARpnQ"
          mapStyle="mapbox://styles/ms1907/ck68cppyd0bbp1ipm1z710o6z"
          onViewportChange={this._onViewportChange}
        >
        {showPopup && <Popup
          latitude={viewport.latitude}
          longitude={viewport.longitude}
          closeButton={true}
          closeOnClick={false}
          onClose={() => this.setState({showPopup: false})}
          anchor="top" >
          <div>You are here</div>
        </Popup>}
        <Marker key={"a"} latitude={viewport.latitude} longitude={viewport.longitude} offsetLeft={-900} offsetTop={-400}>
            <LeftContainer/>
         </Marker>

         <Marker key={"ab"} latitude={viewport.latitude} longitude={viewport.longitude} offsetLeft={500} offsetTop={-400}>
            <DataContainer/>
          </Marker>
      </ReactMapGL>
    );
  }
}