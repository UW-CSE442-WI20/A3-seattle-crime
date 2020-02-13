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

const Loading = styled.div`
    text-align: center;
    font-size: 2em;
    margin: 100px 0px;
`;


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

const NUM_BUCKETS = 15

var pieData = {};
var barData = {};

export default class LeftContainer extends PureComponent {
    formatPieData() {
        let labels = [];
        let data = [];
        let color = [];

        let count = 0;
        for (const crime in this.props.categoryData) {
            count++;
            if (count < NUM_BUCKETS) {
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
    }

    formatBarData() {
        let barLabels = [];
        let bData = [];
        for (const year in this.props.yearData) {
            if (year > 2008) {
                barLabels.push(year);
                bData.push(this.props.yearData[year]);
            }
        }
        barData = {
            labels: barLabels,
            datasets: [
            {
                lavel: "Crimes per Year",
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: bData
            }
        ]};
    }

    render() {
        if (this.props.markers.length === 0 || !this.props.categoryData) {
            return <Loading>Loading...</Loading>;
        } else {
            this.formatPieData();
            this.formatBarData();

            console.log("YEAR", barData)
            
            return(
                <div>
                    <p>Crime Score: {}</p>
                    <div>
                        <h2>Crime Type</h2>
                    <Pie data={pieData}
                    height={400}/>
                    </div>

                    <div>
                        <h2>Crimes per Year</h2>
                        <Bar data={barData}
                            height={400}/>
                    </div>

                </div>
            );
        }
    }
}
