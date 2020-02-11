import React, {useState, PureComponent} from "react";
import styled from "styled-components";
import {Container} from "react-bootstrap";
import Slider from '@material-ui/core/Slider';
import ReactMapGL, {Marker} from "react-map-gl";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";


const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 0.5,
    label: '0.5',
  },
  {
    value: 1,
    label: '1',
  },
  {
      value: 1.5,
      label: '1.5',
   },
  {
    value: 2,
    label: '2',
  },
];

const CloseButton = styled(IconButton)`
    margin: 0px; 0px;
`;

const Headline = styled.div`
    font-weight: bold;
    font-size: 2em;
    text-align: center;
`;

function valuetext(value) {
  return `${value}°C`;
}

    const InfoBox = styled.div`
          height: 400px;
          width: 400px;
          margin: 20px 0px 0px 10px;
          background: white;
   `;

   const Box = styled.div`
             height: 200px;
             width: 350px;
             background: white;
      `;
   const CustomSlider = styled(Slider)`
        margin: 30px 20px;
        padding: 0px 0px;
   `;

export default class LeftContainer extends PureComponent {

    render() {

        return(
            <InfoBox>
                <CloseButton aria-label="close" onClick={()=>{this.props.updateCheckDataCon(false);}}>
                    <CloseIcon />
                  </CloseButton>
                <Headline>Data Here</Headline>
                <p>Hover over counties to highlight counties that share the same name.</p>
                <p>latitude: {this.props.markers[0].latitude}</p>
                <p>longitude: {this.props.markers[0].longitude}</p>
                <p>radius: {}</p>

            </InfoBox>
        );
    }


}