import React from "react";
import styled from 'styled-components';


const Div = styled.div`
    display:flex;
    position: relative;
    margin: 0 auto;
    width:80%;
    background-color: white;
    border: 1px solid lightgray;
    height: 15rem;
    padding: 1.5rem;

`;

const Img = styled.div`
    width: 200px;
    height: 200px;
    background-size: cover;
    background-image:url(${props=>props.src});
    background-repeat:no-repeat;
    background-position: center;
    margin-right: 3rem;
`;

const BottomDiv = styled.div`
    position: absolute;
    bottom:0;
`;

function RoomList(props) {
    return (
        <Div>
            <Img src={props.src}/>
            <article>
            <div>
            <h6>{props.title}</h6>
            <p>인원 {props.people}명, {props.detail}</p>
            </div>
            <BottomDiv>
                <p>별점 : {props.star}점
                <br></br>리뷰 : {props.review}개</p>
            </BottomDiv>
            </article>
        </Div>
    );
}

export default RoomList;

