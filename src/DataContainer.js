import React, {useState, PureComponent} from "react";
import styled from "styled-components";
import {Container} from "react-bootstrap";
import Slider from '@material-ui/core/Slider';
import ReactMapGL, {Marker} from "react-map-gl";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Iframe from 'react-iframe'

// import PieChart from 'react-minimal-pie-chart';
import BarChart from 'react-bar-chart';

import {Pie, Bar} from 'react-chartjs-2';



const CloseButton = styled(IconButton)`
    margin: 0px; 0px;
`;

const Frame = styled(Iframe)`
    margin: 100px; 100px;
`;

const Headline = styled.div`
    font-weight: bold;
    font-size: 2em;
    text-align: center;
`;

const Loading = styled.div`
    text-align: center;
    font-size: 2em;
    margin: 0px 0px;
    color: red;
`;

const NUM_BUCKETS = 15

var pieData = {};
var barData = {};

var crimesTotal = 0;

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
        let lastCrimeScore = 0;
        let barLabels = [];
        let bData = [];
        for (const year in this.props.yearData) {
            if (year > 2008) {
                barLabels.push(year);
                bData.push(this.props.yearData[year]);
                lastCrimeScore = this.props.yearData[year];
            }
        }
        barData = {
            labels: barLabels,
            datasets: [
            {
                label: "Crimes per Year",
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: bData
            }
        ]};
        return lastCrimeScore;
    }

    calculateCrimeScore() {

    }

    render() {
        if (!this.props.categoryData) {
            return <Frame url="https://giphy.com/embed/3oEjI6SIIHBdRxXI40"
                      width="480px"
                      height="480px"
                      id="myId"
                      className="giphy-embed"
                      display="initial"
                      position="right"
                      frameBorder="0"
                      />;
        } else if (this.props.markers.length === 0 && !this.props.categoryData) {
            return <Frame url="https://giphy.com/embed/J342sjcgjiqRLoFnQS"
                      width="480px"
                      height="480px"
                      id="myId"
                      className="giphy-embed"
                      display="initial"
                      position="relative"
                      />
        } else {
          console.log(this.props);
            this.formatPieData();
            this.formatBarData();
            if (pieData.labels.length == 0) {
              return <div><Frame url="https://giphy.com/embed/J342sjcgjiqRLoFnQS"
                        width="480px"
                        height="480px"
                        id="myId"
                        className="giphy-embed"
                        display="initial"
                        position="relative"
                        />
                        <Loading>Please click a valid spot in Seattle</Loading>
                        </div>
            }

            return(
                <div>
                    <div>
                        <h2>Crime Type</h2>
                    <Pie data={pieData}
                    height={500}/>
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
