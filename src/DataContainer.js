import React, {useState, PureComponent} from "react";
import styled from "styled-components";
import {Container} from "react-bootstrap";
import Slider from '@material-ui/core/Slider';
import ReactMapGL, {Marker} from "react-map-gl";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import PieChart from 'react-minimal-pie-chart';
import BarChart from 'react-bar-chart';



const CloseButton = styled(IconButton)`
    margin: 0px; 0px;
`;

const Headline = styled.div`
    font-weight: bold;
    font-size: 2em;
    text-align: center;
`;

var pieData = [

  ];

const barData = [
    {text: '1990', value: 500}, 
    {text: '1991', value: 300} 
  ];

function valuetext(value) {
  return `${value}°C`;
}
//     const InfoBox = styled.div`
//           height: 400px;
//           width: 400px;
//           margin: 20px 0px 0px 10px;
//           background: white;
//    `;
//    const Box = styled.div`
//              height: 200px;
//              width: 350px;
//              background: white;
//       `;

export default class LeftContainer extends PureComponent {
    formatData() {
        for (const crime in this.props.categoryData) {
            const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
            pieData.push({
                title: crime,
                value: this.props.categoryData[crime],
                color: randomColor
            })
        }
    }

    render() {
        
        if (this.props.markers.length === 0 || !this.props.categoryData) {
            return <div></div>;
        } else {
            this.formatData();

            return(
                <div>
                    <CloseButton aria-label="close" onClick={()=>{this.props.updateCheckDataCon(false); this.props.markers.length = 0}}>
                        <CloseIcon />
                    </CloseButton>
                    <Headline>Crime Data</Headline>
                    <p>Latitude: {this.props.markers[0].latitude}</p> 
                    <p>Longitude: {this.props.markers[0].longitude}</p>
                    <p>Radius: {this.props.radius}</p>
                    <p>Crime Score: {}</p>
                    <PieChart data={pieData} />
                    <BarChart style={{margin:"20px"}}
                        height={500} 
                        width={document.getElementById("right-col").offsetWidth}
                        data={barData}
                        ylabel='Number of Crimes'
                        xlabel='Year'
                    />
                </div>
            );
        }
    }


}