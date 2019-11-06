//import React from "react";
import styled from 'styled-components';

const ModalDiv = styled.div`
    display: ${props => props.clicked ? "static" : "none"};
    position: absolute;
    top: 1rem;
    left: ${props=>props.left};
    background-color: white;
    border: 1px solid #F2F2F2;
    border-radius: 0.5rem;
    padding 1rem;
    width: auto;
    height: auto;
`

const BackgroundModalDiv = styled.div`
  display: ${props=>props.isVisible ? "flex" : "none"};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 8rem;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.2);
`;

export {BackgroundModalDiv, ModalDiv};

