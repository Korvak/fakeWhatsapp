import React from 'react';
import './App.css';

import Navbar from './components/navbar';
import Chats from './components/chats';

const chatData = [
  {
    name : "Marco",
    surname :"Vazzocci"
  },
  {
    name : "Fabio",
    surname : "Morabito"
  }
]


function App() {

  //const isRed = false;
  //const col = isRed === true ?  "text-red-500" : "text-green-500";
  const element = true ? <Navbar></Navbar> : null;


  return (
    <>
      {false ? <Navbar></Navbar> : null}
      <Navbar col={"text-blue-500"}></Navbar>
      <Chats chats={chatData}></Chats>
    </>
  );
}

export default App;
