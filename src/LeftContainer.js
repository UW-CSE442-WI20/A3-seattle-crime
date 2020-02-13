import React, {useState, PureComponent} from "react";
import styled from "styled-components";
import {Container} from "react-bootstrap";
import Slider from '@material-ui/core/Slider';
import Checkbox from '@material-ui/core/CheckBox';
import ReactMapGL, {Marker} from "react-map-gl";
import FormControlLabel from '@material-ui/core/FormControlLabel';


function valuetext(value) {
  return `${value}`;
}

export default function LeftContainer(props) {

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 0.25,
    label: '0.25',
  },
  {
    value: 0.5,
    label: '0.5',
  },
  {
      value: 0.75,
      label: '0.75',
   },
  {
    value: 1,
    label: '1',
  },
];



//     const InfoBox = styled.div`
//           height: 400px;
//           width: 400px;
//           margin: 20px 0px 0px 10px;
//           background: white;
//    `;
//    const Box = styled.div`
//              height: 100px;
//              width: 350px;
//              background: white;
//       `;
   const CustomSlider = styled(Slider)`
        // padding: 50px;
   `;

   const Space = styled.h4`
      margin: 50px 0px 10px 0px;
   `;

        return(
            <div>
                <h3>Find how much crime occurs around you?</h3>
                <p>Double click anywhere on a map and we will tell
                you how much crime occurs around that area.
                You can adjust the radius of the crime area
                With this handy dandy slider below:</p>
                <Space>CIRCLE RADIUS IN MILES</Space>
                <div>
                    <CustomSlider
                        defaultValue={props.radius}
                        getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider"
                        max={1}
                        min={0}
                        step={0.05}
                        marks={marks}
                        valueLabelDisplay="auto"
                        onChange={(event, r)=>{props.updateRadius(r)}}
                      />
                </div>
                {/* <FormControlLabel
                    control={
                            <Checkbox checked={false} onChange={()=>{}} value="checkedA" />
                         }
                         label="Secondary"
                />
                <FormControlLabel
                    control={
                        <Checkbox checked={false} onChange={()=>{}} value="checkedA" />
                    }
                    label="Secondary"
                />
                <FormControlLabel
                    control={
                            <Checkbox checked={false} onChange={()=>{}} value="checkedA" />
                         }
                         label="Secondary"
                />
                <FormControlLabel
                    control={
                        <Checkbox checked={false} onChange={()=>{}} value="checkedA" />
                    }
                    label="Secondary"
                />
                <FormControlLabel
                    control={
                            <Checkbox checked={false} onChange={()=>{}} value="checkedA" />
                         }
                         label="Secondary"
                />
                <FormControlLabel
                    control={
                        <Checkbox checked={false} onChange={()=>{}} value="checkedA" />
                    }
                    label="Secondary"
                /> */}
            </div>
        );


}
