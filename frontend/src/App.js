// App.js
import './index.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import { UserContext } from './components/Context/userContext.jsx';

//components
import Navbar from './components/shared/navbar.jsx';
import ChatPage from './components/Chat/chatPage.jsx';

const user = {
  config : {
    navType : 'VERT'
  },
  style : {
    txt_color : "green-500",
    bg_color : "bg-green-600"
  }
}

function App() {

  //use effect to fetch user specification


  const vert_nav = user.config.navType === 'VERT' ? <Navbar /> : null;

  return (
    <>
      <UserContext.Provider value={user}>
        {vert_nav}
        <Router>
          <Routes>
            <Route path='/' element={<ChatPage />}></Route>
          </Routes>
        </Router>
      </UserContext.Provider>
    </>
      
  );
}

export default App;