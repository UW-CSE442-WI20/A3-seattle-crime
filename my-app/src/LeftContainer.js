import React, {useState, PureComponent} from "react";
import styled from "styled-components";
import {Container} from "react-bootstrap";
import Slider from '@material-ui/core/Slider';
import Checkbox from '@material-ui/core/CheckBox';
import ReactMapGL, {Marker} from "react-map-gl";
import FormControlLabel from '@material-ui/core/FormControlLabel';


function valuetext(value) {
  return `${value}°C`;
}

export default function LeftContainer(props) {

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

        return(
            <div>
                <h3>Highlight Features Containing Similar Data</h3>
                <p>Hover over counties to highlight counties that share the same name.</p>
                <div>
                    <CustomSlider
                        defaultValue={50}
                        getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider"
                        max={2}
                        min={0}
                        step={0.25}
                        marks={marks}
                        valueLabelDisplay="auto"
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