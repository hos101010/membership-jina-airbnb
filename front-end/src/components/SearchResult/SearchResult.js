import React from "react";
import styled from 'styled-components';
import RoomList from "./RoomList/RoomList"
import PreResult from "./PreResult/PreResult"
import { useState, useEffect } from "react";


const SearchResDiv = styled.div`
  margin: auto;
  margin-top: 3rem;
  width: 100%;
  height: 50rem;
`;

async function getAllRooms(){
  const response = await fetch("/rooms");
  const responseJson = await response.json();
  return responseJson;
}

function SearchResult() {
  const [rooms, setRooms] = useState({data:[]});

  useEffect(()=>{
    const fetchItems = async () => {
      const newItems = await getAllRooms();
      setRooms(newItems || []);
    };	        
    fetchItems();
  },[]);

  return (
    <SearchResDiv className="search_res">
      <PreResult/>
        {rooms.data.map((room)=>{
          return (<RoomList
                    key={room.room_id}
                    src={room.img}
                    people={room.people}
                    review={room.review}
                    detail={room.detail}
                    star={room.star}
                    title={room.title}/>);
        })}
    </SearchResDiv>
  );
}

export default SearchResult;