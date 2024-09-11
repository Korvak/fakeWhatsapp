// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//components

import Navbar from './components/shared/navbar.jsx';

function App() {

  //use effect to fetch user specification

  const user = {
    config : {
      navType : 'VERT'
    }
  }

  const vert_nav = user.config.navType === 'VERT' ? <Navbar /> : null;


  return (
    <>
      {vert_nav}
      <Router>
        <Routes>
          <Route path='/' ></Route>
        </Routes>
      </Router>


    </>
      
  );
}

export default App;