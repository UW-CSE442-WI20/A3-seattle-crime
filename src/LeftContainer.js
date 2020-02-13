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
    value: 0.1,
    label: '0.1',
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
                <h2>How much crime occurs around you?</h2>
                <p>Double click anywhere on a map and we will tell
                you how much crime occurs around that area. Single
                click to remove the marker.
                You can adjust the radius of the crime area
                with this handy dandy slider below:</p>
                <Space>CIRCLE RADIUS IN MILES</Space>
                <div>
                    <CustomSlider
                        defaultValue={props.radius}
                        getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider"
                        max={1}
                        min={0.1}
                        step={0.05}
                        marks={marks}
                        valueLabelDisplay="auto"
                        onChange={(event, r)=>{
                          if(props.checkDataCon) {
                            props.changeInRadius(r);
                          }
                          props.updateRadius(r)
                        }}
                      />
                </div>
                <br></br>

                <h2>Our Design Process</h2>
                <p>
                During the early stages of the project we knew we wanted to do something with crimes in the Seattle area. This was inspired by the spike of crime we noticed on “The Ave” just one block from the University of Washington. We were able to find a clean Kaggle dataset with crime reports in Seattle. The dataset was large so we chose to use only the data from 2009-2016 arbitrarily. From there we explored the data to see what we could do with it. We noticed the most interesting attributes were the report date, crime location (given in latitude and longitude), and crime type. At first we were going to show how much crime occured in a given zip code. However, we instead decided to show how much crime occurs in the area around you. We decided to use the area around you over a zip code because we saw a large variance in zip code size. Thus, it would have been highly probable for a larger zip code to experience more crime than a smaller zip code simply due to its larger size. This is a bias, and since we do not want to deceive our viewers, we decided to use the area around you for our visual. We also thought it is more personal to know how much crime occurs around you since as students we typically only visit places within a radius near us. Since this was inspired by local crime, this seemed to fit our intentions better: To raise the awareness of your local crime.
                </p>
                <h2>Our Development Process</h2>
                <p>
                Our development process was to think about how the different ways that the data can be represented and how to make the best design decision that would be the most intuitive for any user. We each came into meetings with different ideas that we could discuss at each of our biweekly meetings so we could come up with multiple solutions to our interactive design. Brainstorming beforehand and coming together as a team helped us get the most well thought out design and helped us plan ahead so we would not fall into as many dead ends during the design process. We split up the team based on our strengths; for example, people who had database experience handled the backend and people who had front end experience helped design the interface. But at our core we also helped each other in all aspects of the project because as individuals we had holes in our knowledge but as a team we could help each other learn to make the best product we can. Alan and Billy focused on developing and deploying the backend server. Murathan and Trey developed the front end interface, with help from Alan with debugging. Roughly we spent over 45+ total hours as a team and the design process, coding, and hosting took about 40%, 50%, 10% respectively.
                </p>
            </div>
        );


}
