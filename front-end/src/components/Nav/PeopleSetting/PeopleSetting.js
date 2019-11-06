import React from "react";
//import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import styled from 'styled-components';
import ApplyBtn from '../ApplyBtn/ApplyBtn'

const Div = styled.div`
    padding-top: 0.5rem;
    display:flex;
    width: 15rem;
`;

const Button = styled.input.attrs(props=>({
    type: 'button'
}))`
    transform: translateY(-20%);
    color: #008489;
    border: 1px solid #008489;
    background-color: white;
    margin: 0.3rem;
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    cursor: pointer;
    outline: 0;
    font-size: 17px;
    margin-left:1rem;
    margin-right:1rem;
    &:hover{
        background-color: #008489;
        color:white;
    }
`;

const P = styled.p`
    margin-left:1rem;
`;

const BtnDiv = styled.div`
    display:flex;
    position: absolute;
    right:0;
    margin-right:1rem;
`;

function PersonSetting(props){
    const [count, setCount] = useState(0);

    function up(){
        setCount(count + 1);
    }
    function down() {
        if (count > 0) setCount(count - 1);
    }

    useEffect(() => {});

    return (
        <>
        <Div>
            <P>{props.kind}</P>
            <BtnDiv>
                <Button value="-" onClick={down}/>
                <p>{count}</p>
                <Button value="+" onClick={up}/>
            </BtnDiv>
        </Div>
        </>
    );
}

function PeopleSetting(props) {
    return(
        <>
        <PersonSetting kind="성인"/>
        <PersonSetting kind="어린이"/>
        <PersonSetting kind="유아"/>
        <ApplyBtn value="저장"/>
        </>
    );
}

export default PeopleSetting;
