import React from "react";
import styled from 'styled-components';
import { useState, useEffect } from "react";


const Div = styled.div`
    display: flex;
    margin: 0 auto;
    width:80%;
    background-color: white;
    height: 5rem;
    padding-top: 1rem;
    padding-left: 3rem;
`;

const P = styled.p`
    margin-top: 0.5rem;
    margin-left: 3rem;
    font-size: 15px;
`;

function PreResult(props) {
  const [src, setSrc] = useState("https://a0.muscache.com/airbnb/static/packages/icon-uc-trophy.9ee78aa1.gif");
  
  return (
    <Div>
        <img src={src} width="50rem" height="50rem"></img>
        <P>Ghent 숙소에 대해  55,000개 이상의 게스트 후기가 있으며, 평점은 5점 만점에 4.7점입니다.</P>
    </Div>
  );
}

export default PreResult;

