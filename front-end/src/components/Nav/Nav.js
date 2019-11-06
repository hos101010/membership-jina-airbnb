import React from "react";
import styled from 'styled-components';
import {useReducer} from 'react';
//import { useState, useEffect } from "react";

import FilterBtn from "./FilterBtn/FilterBtn"
import {BackgroundModalDiv, ModalDiv} from "./ModalDiv/ModalDiv";
import PeopleSetting from "./PeopleSetting/PeopleSetting";
import DateRangeExample from "./Calendar/Calendar";
import Price from "./Price/Price"

const FilterBtnQuantity = 5;

const SearchBar = styled.input.attrs(props=>({
  type:"text",
}))`
  margin-left: 2rem;
  width: 30rem;
  height: 2rem;
  background-color: white;
  border: 1px solid lightgray;
`;


const NavDiv = styled.div`
  margin: auto 0;
  margin-top: 1rem;
  height: 5rem;
  width: 100%;
`;

const BtnDiv = styled.div`
  margin-top: 1rem;
  margin-left: 1.5rem;
  display: flex;
`;


function init(){
  let initialState = [];
  for(let i=0; i<FilterBtnQuantity; i++){
    initialState.push(false);
  }
  return initialState;
}

function selectFilter(state, action){
  let newState = init();

  if (action.isBackground){  //배경 클릭 시
    if (action.target === action.curTarget) return {any: false, clicked : newState};
    return {any:true, clicked: action.preState};
  }
  
  //필터 버튼 클릭 시
  if (state.clicked[action.selected]) return {any: false, clicked : newState}; //이미 눌려있는 버튼 클릭 시
  
  //다른 버튼 클릭 시
  newState[action.selected] = true;
  return {any: true, clicked : newState};
}


function Nav() {
  const [state, dispatch] = useReducer(selectFilter, {any: false, clicked : init()});
  
  return (
    <NavDiv>
      <SearchBar/>
      <BtnDiv>
        <FilterBtn value={"날짜"} onClick={()=>dispatch({selected : 0})} clicked={state.clicked[0]}/>
        <FilterBtn value={"인원"} onClick={()=>dispatch({selected : 1})} clicked={state.clicked[1]}/>
        <FilterBtn value={"숙소 유형"} onClick={()=>dispatch({selected : 2})} clicked={state.clicked[2]}/>
        <FilterBtn value={"가격"} onClick={()=>dispatch({selected : 3})} clicked={state.clicked[3]}/>
        <FilterBtn value={"필터 추가하기"} onClick={()=>dispatch({selected : 4})} clicked={state.clicked[4]}/>
      </BtnDiv>
      <BackgroundModalDiv isVisible={state.any} onClick={(e)=>dispatch({isBackground: true, target: e.target, curTarget: e.currentTarget, preState: state.clicked})}>
        <ModalDiv left={"2rem"} clicked={state.clicked[0]}><DateRangeExample/></ModalDiv>
        <ModalDiv left={"6rem"} clicked={state.clicked[1]}><PeopleSetting/></ModalDiv>
        <ModalDiv cla left={"11.5rem"} clicked={state.clicked[2]}>
          <div>
            <input type="checkbox"></input>집 전체
            <br></br>집 전체를 단독으로 사용합니다
            <br></br>
            <br></br>
            <input type="checkbox"></input>개인실
            <br></br>침실은 단독으로 쓰고, 이외의 공간은 호스트나 다른 게스트와 함께 이용할 수도 있습니다.
            <br></br>
            <br></br><input type="checkbox"></input>호텔 객실
            <br></br>부티크 호텔, 호스텔 등의 개인실이나 다인실을 이용합니다
            <br></br>
            <br></br><input type="checkbox"></input>다인실
            <br></br>사적 공간 없이, 침실이나 욕실 등을 호스트나 다른 게스트와 함께 이용합니다
          </div>
        </ModalDiv>
        <ModalDiv left={"17rem"} clicked={state.clicked[3]}><Price/></ModalDiv>
        <ModalDiv left={"22rem"} clicked={state.clicked[4]}>...ㅎㅎ</ModalDiv>
      </BackgroundModalDiv>
    </NavDiv>
  );
}

export default Nav;

