import React from 'react';
import Nav from './components/Nav/Nav';
import SearchResult from './components/SearchResult/SearchResult';
import './App.css';

// async function testFetch(){
//   const response = await fetch("/test");
//   const resposeJson = await response.json();
//   console.log(response, resposeJson);
// }

function App() {
  //testFetch();
  return (
    <div className="App">
      <Nav/>
      <SearchResult/>
    </div>
  );
}

export default App;
