import React, { Component } from 'react';
//import queue from 'queue';
import topojson from 'topojson';
import * as d3 from 'd3';
import * as area from "./csvjson";

class District extends Component {
    constructor() {
        super()
        this.state = {
                data: null
        }
    }

    componentWillMount() {
        d3.queue()
            .defer(d3.json, "./csvjson")
            .await((error, data) => {
            this.setState({
                data
            });
        })
    }
    componentDidUpdate() {
        const svg = d3.select(this.refs.anchor),
            {width, height} = this.props;
        const projection = d3.geoMercator().center([-73.94, 40.70]).scale(50000).translate([(width) / 2, (height)/2]);
        const path = d3.geoPath(projection);

        const data = this.state.data;

        svg.append("g").attr("id", "boroughs")
                       		.selectAll(".state")
                       		.data(data.features)
                       		.enter().append("path")
                       		.attr("class", function(d){ return d.properties.name; })
                       		.attr("d", path);

    }

    render() {
        const {data} = this.state;

        if(!data) {
            return null;
        }

        return <g red="anchor" />
    }
}

export default District;