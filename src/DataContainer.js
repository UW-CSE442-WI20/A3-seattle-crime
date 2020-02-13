import React, {useState, PureComponent} from "react";
import styled from "styled-components";
import {Container} from "react-bootstrap";
import Slider from '@material-ui/core/Slider';
import ReactMapGL, {Marker} from "react-map-gl";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

// import PieChart from 'react-minimal-pie-chart';
import BarChart from 'react-bar-chart';

import {Pie, Bar} from 'react-chartjs-2';



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



// const piedata = {
// 	labels: [
// 		'Red',
// 		'Blue',
// 		'Yellow'
// 	],
// 	datasets: [{
// 		data: [300, 50, 100],
// 		backgroundColor: [
// 		'#FF6384',
// 		'#36A2EB',
// 		'#FFCE56'
// 		],
// 		hoverBackgroundColor: [
// 		'#FF6384',
// 		'#36A2EB',
// 		'#FFCE56'
// 		]
// 	}]
// };


// bar data

// labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
// datasets: [
//   {
//     label: 'My First dataset',
//     backgroundColor: 'rgba(255,99,132,0.2)',
//     borderColor: 'rgba(255,99,132,1)',
//     borderWidth: 1,
//     hoverBackgroundColor: 'rgba(255,99,132,0.4)',
//     hoverBorderColor: 'rgba(255,99,132,1)',
//     data: [65, 59, 80, 81, 56, 55, 40]
//   }
// ]


var pieData = {};
var barData = {};

export default class LeftContainer extends PureComponent {
    formatPieData() {
        // pieData = {
        //     labels: [],
        //     datasets: [{
        //         data: [],
        //         backgroundColor: [], 
        //         hoverBackgroundColor: []
        //     }]
        // };
        let labels = [];
        let data = [];
        let color = [];

        let count = 0;
        for (const crime in this.props.categoryData) {
            count++;
            if (count < 20) {
                const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
                labels.push(crime);
                data.push(this.props.categoryData[crime]);
                color.push(randomColor);
            }
        }

        pieData = {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: color, 
                hoverBackgroundColor: color
            }]
        };
        console.log(pieData)
    }

    formatBarData() {
        let labels = [];
        let data = [];

        for (const year in this.props.categoryData) {
            labels.push(year);
            data.push(this.props.categoryData[year]);
        }

        barData = {
            labels: labels,
            datasets: [
            {
                label: 'Crimes per Year',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: data
            }
        ]};
    }

    render() {

        if (this.props.markers.length === 0 || !this.props.categoryData || this.props.checkDataCon) {
            return <div></div>;
        } else {
            this.formatPieData();
            this.formatBarData();

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
                    <div>
                        <h2>Crimes per Area</h2>
                    <Pie data={pieData} 
                    height={500}/>
                    </div>
                 
                </div>
            );
        }
    }
}
/* <Bar data={barData} /> */