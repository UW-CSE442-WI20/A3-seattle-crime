import React, {useState, Component} from "react";
import ReactMapGL, {Marker} from "react-map-gl";
import * as zipCode from "./zip-code.json";
import {Button, Container} from 'react-bootstrap';
import styled from 'styled-components';
import PieChart from 'react-minimal-pie-chart';
import Header from "./Header";
import LeftContainer from "./LeftContainer";
import BigMap from "./BigMap";
import Map from "./Map";

export default class App extends Component {

    render() {
    return (
        <div>
          <Header/>
          <BigMap/>
        </div>
      );
    }

}

