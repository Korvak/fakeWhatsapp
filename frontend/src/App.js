// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Example from './components/Examples/example.jsx';

function App() {
  return (
    <div>
      <Example cls={"text-red-700"} showSelect={true}>
        <p key={1}>this is a child</p>
      </Example>
      <Router>
        <Routes>
          <Route path='/' ></Route>
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;