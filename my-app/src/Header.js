import React, {useState, PureComponent} from "react";
import styled from "styled-components";

export default function Header() {
    const Header = styled.div`
    background: pink;
  `;

    const Title = styled.div`
    margin: 0 0;
    padding: 0px 700px;
    font-size: 1.5em;
    display: inline-block;

  `;


    return(

      <Header>
        <Title>CRIME IN MY AREA</Title>
      </Header>

    );


}