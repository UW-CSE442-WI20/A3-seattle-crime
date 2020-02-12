import React, {useState, PureComponent} from "react";
import ReactMapGL, {Marker, Layer} from "react-map-gl";
import * as zipCode from "./zip-code.json";
import {Button, Container} from 'react-bootstrap';
import styled from 'styled-components';
import Header from "./Header";
import LeftContainer from "./LeftContainer";
import data from "./map.geojson";
import DataContainer from "./DataContainer";
import {Rectangle, Circle, Ellipse, Line, Polyline, CornerBox, Triangle} from 'react-shapes';

export default function BigMap() {
    const SIZE = 30;
    const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
    c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
    C20.1,15.8,20.2,15.8,20.2,15.7z`;
    const [count,setCount] = useState(0);
    const [countt,setCountt] = useState(0);

    const [markers, setMarkers] = useState([]);
    const handleClick = ({lngLat: [longitude, latitude]}) => setMarkers(markers => [{longitude, latitude}]);

  const Map = styled(Container)`
        height: 500px;
        width: 600px;
        margin: 200px 0px 0px 1300px;
        background: white;
  `;

  const MyCircle = styled(Circle)`
    opacity: 0.2;
  `;

  const [viewport,setViewport] = useState({
    latitude: 47.6062,
    longitude: -122.3321,
    width: "100%",
    height: "95vh",
    zoom: 10.5
  });

  const [radius, updateRadius] = useState(1);

  const MyMarker = styled(Marker)`
    background: white;
  `;

    const [isHovered, updateIsHovered] = useState(false);

    const [checkDataCon, updateCheckDataCon] = useState(false);

  const [filters, updateFilters] = useState({
    check1: true,
    check2: false,
    check3: false,
    check4: false,
    check5: false,
    check6: false
  });

  const ColumnDiv = styled.div`
    float: left;
    padding: 10px;
    width: 30%;
    word-wrap: break-word;    
  `;

  const [check, setCheck] = useState(false);
  
    return (
      <div>
        <ColumnDiv className="column left">
          <LeftContainer filters={filters} updateFilters={updateFilters} radius={radius} updateRadius={updateRadius}/>
        </ColumnDiv>
        <ColumnDiv className="column middle">
        <ReactMapGL
            {...viewport}
            mapboxApiAccessToken="pk.eyJ1IjoibXMxOTA3IiwiYSI6ImNrNjhjMXB0eTAzZjUzZm9nbmQzMGc4Y3QifQ.ZuJyRlBq6Wo2l_RPrARpnQ"
          mapStyle="mapbox://styles/ms1907/ck68cppyd0bbp1ipm1z710o6z"
                
          onDblClick={handleClick}
          onClick={() => {updateCheckDataCon(false);}
          }
            >
              <Marker key={"a"} latitude={viewport.latitude} longitude={viewport.longitude} offsetLeft={-800} offsetTop={-400}>
                      </Marker>

                     
              {markers.map((m, i) =>
                <div>
                  <Marker {...m} key={i} draggable={true} onDrag={handleClick}>
                      <svg height={SIZE}
                          viewBox="0 0 24 24"
                          className="aaa"
                          style={{
                            cursor: 'pointer',
                            fill: isHovered ? '#333' : '#d00',
                            stroke: 'none',
                            transform: `translate(${-SIZE / 2}px,${-SIZE}px)`
                          }}
                          onClick={() => {setCheck(true); updateCheckDataCon(true); console.log(markers)}}
                          onMouseEnter={()=>{updateIsHovered(true)}}
                          onMouseLeave={()=>{updateIsHovered(false)}}
                        >
                        <path d={ICON} />
                      </svg>
                  </Marker>
                  <Marker {...m} key={i+1} draggable={true} onDrag={handleClick} offsetLeft={-50*radius} offsetTop={-50*radius}>
                    <MyCircle r={radius*50} fill={{color:'#2409ba'}}/>

                  </Marker>
                  
                </div>
              )}
          </ReactMapGL>
        </ColumnDiv>
        <ColumnDiv className="column right" id="right-col" >
          <DataContainer markers={markers} setCheck={setCheck} updateCheckDataCon={updateCheckDataCon} radius={radius}/>
        </ColumnDiv>
      </div>
      
    );

}


