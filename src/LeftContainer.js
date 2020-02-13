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
                <h2>Find how much crime occurs around you?</h2>
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
                        onChange={(event, r)=>{
                          if(props.checkDataCon) {
                            props.changeInRadius();
                          }
                          props.updateRadius(r)
                        }}
                      />
                </div>
                <br></br>

                <h2>Write-Up</h2>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                </p>
            </div>
        );


}
