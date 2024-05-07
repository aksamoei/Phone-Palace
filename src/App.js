import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {

  const [phones, setPhones] = useState([]);
  

  useEffect(()=>{
    fetch("http://localhost:3001/phones")
    .then((re)=>re.json())
    .then((data)=>setPhones(data))
  })
  console.log(phones)
  

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      {/*<header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
       
  </header>*/}
      <Outlet context={{phones: phones, setPhones: setPhones}}/>
       {/* <Home phones={phones} setPhones={setPhones}/> */}
    </div>
  );
}

export default App;
