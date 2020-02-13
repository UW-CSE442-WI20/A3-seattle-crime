import React, {useState, PureComponent} from "react";
import styled from "styled-components";

export default function Header() {
    const Header = styled.div`
    background: lightgray;
    
  `;

    const Title = styled.div`
    margin: 0 0;
    font-size: 1.5em;
    display: inline-block;
    
  `;

  const Logo = styled.div`
  margin: 2;

  

`;


    return(

      <Header>
        <img src="http://www.seattle.gov/Images/Council/Logos/City-of-Seattle-Logo_Color-on-Transparent.png" height="50px" style={{margin: "5px"}}></img>
        <Title>Crime in Seattle, WA</Title>
      </Header>
    );


}
