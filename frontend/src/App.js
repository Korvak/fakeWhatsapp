// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Navbar from './components/Shared/navbar';

function App() {
  return (
    <div>
      <Navbar cls={"text-red-700"}></Navbar>
      <Router>
        <Routes>
          <Route></Route>
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;