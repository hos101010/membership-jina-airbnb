import React from "react";
import styled from 'styled-components';

/*
const sty = css`........`;
const button ={
    ${sty}
    width :
}
*/

const Input = styled.input.attrs(props=>({
    type: 'button'
}))`
    margin: 0.3rem;
    height: 2.3rem;
    min-width: 4rem;
    border-radius: 0.5rem;
    border: 1px solid ${props => props.clicked ? "#008489" : "lightgray"};
    cursor: pointer;
    outline: 0;
    font-size: 17px;
    color: ${props => props.clicked ? "white" : "black"};
    &:hover{
        background-color: ${props => props.clicked ? "#006C70" : "#F2F2F2"};
        border: 1px solid ${props => props.clicked ? "#006C70" : "#F2F2F2"};
    }
    background-color: ${props => props.clicked ? "#008489" : "white"};
`

function FilterBtn(props) {
    return (
        <Input value={props.value} onClick={() => {props.onClick()}} clicked={props.clicked}/>
    );
}

export default FilterBtn;

