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

const pieData = [
    { title: 'Misdemeanors', value: 10, color: '#E38627' },
    { title: 'Assaults', value: 15, color: '#C13C37' },
    { title: 'Murders', value: 20, color: '#6A2135' },
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
    

    render() {
        
        if (this.props.markers.length === 0 || !this.props.categoryData) {
            return <div></div>;
        } else {
            return(
                <div>
                    <CloseButton aria-label="close" onClick={()=>{this.props.updateCheckDataCon(false); this.props.markers.length = 0}}>
                        <CloseIcon />
                    </CloseButton>
                    <Headline>Crime Data</Headline>
                    {/* <p>Hover over counties to highlight counties that share the same name.</p> */}
                    <p>Latitude: {this.props.markers[0].latitude}</p> 
                    <p>Longitude: {this.props.markers[0].longitude}</p>
                    <p>Radius: {this.props.radius}</p>
                    <p>Crime Score: {}</p>
                    {console.log("CATEGORY: ", this.props.categoryData)}
                    <p>LOVE: {this.props.categoryData.statusText}</p>
                    <PieChart data={pieData}>

                    </PieChart>
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