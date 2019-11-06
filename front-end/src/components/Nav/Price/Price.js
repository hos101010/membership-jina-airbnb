import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import ApplyBtn from '../ApplyBtn/ApplyBtn'


const Div = styled.div`
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  position: relative;
  width: 160px;
  height: 28px;
  margin: 16px;
  border: 1px solid #ddd;
  font-family: monospace;
`;
const Range = styled.input.attrs({
  type: "range"
})`
  width: 100%;
  position: absolute;
  margin: 0;
  left: 50%;
  top: 50%;
  transform: translateX(-50%);
  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    height: 0px;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1px solid yellow;
    cursor: pointer;
  }
`;

const Track = styled.input.attrs({
  type: "range",
  min: "0",
  max: "1000000",
  step: "20000"
})`
  -webkit-appearance: none;
  position: absolute;
  margin: 0;
  width: 100%;
  height: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: green;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 0;
    height: 0;
  }
`;

const Input = styled.input`
  width: 5rem;
  height : 2rem;
  border-radius: 0.5rem;
  border: 1px solid lightgray;
  margin: 0.4rem;
  font-size: 13px;
  padding-left: 0.4rem;
`;
let firstClickedButtonIsRight = null;

function Tester(props) {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(1000000);
  
  function moveLeft(e) {
    if (parseInt(right) >= parseInt(e.target.value)) setLeft(e.target.value);
  }
  
  function moveRight(e) {
    if (parseInt(e.target.value) >= parseInt(left)) setRight(e.target.value);
  }
  
  function clickTrack(e) {
    const value = parseInt(e.target.value);
    const leftDistance = Math.abs(value - left);
    const rightDistance = Math.abs(value - right);
    if (leftDistance < rightDistance) {
      if (firstClickedButtonIsRight === true) return;
      if (firstClickedButtonIsRight === null) firstClickedButtonIsRight = false;
      moveLeft(e);
      return;
    }
    if (firstClickedButtonIsRight === false) return;
    if (firstClickedButtonIsRight === null) firstClickedButtonIsRight = true;
    moveRight(e);
  }
  
  function a() {}
  
  return (
    <>
      <Div>​
        <Track
          onChange={clickTrack}
          onMouseUp={() => (firstClickedButtonIsRight = null)}
        />
        <Range
          min="0"
          max="980000"
          step="20000"
          onChange={e => moveLeft(e)}
          value={left}
        />
        <Range
          min="20000"
          max="1000000"
          step="20000"
          onChange={e => moveRight(e)}
          value={right}
        />
      </Div>
      <div>
        <Input type="text" onChange={a} value={`${left}원`} />
        -
        <Input type="text" onChange={a} value={`${right}원`} />
      </div>
      <ApplyBtn value="저장" style={{marginLeft: "8rem"}}/>
    </>
  );
}
export default Tester;