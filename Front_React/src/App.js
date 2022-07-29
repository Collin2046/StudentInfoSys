
import Login from './Login';
import './App.css';
import Main from './Main';
import useToken from './useToken';
import { useState } from 'react';

import Signup from './Signup'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  
  const  [token, setToken] =useState();
  console.log(token);
  console.log(sessionStorage.getItem('token'));
  if(sessionStorage.getItem('token')==null) {
    return <Login setToken={setToken} />
  }
  return (
    <div className='App'>

      <Router>
       <Routes>
          {/*<Route path="/signup" element={<Signup />} />*/}
          <Route path="/main" element={<Main />} />
        </Routes>
      </Router>


    </div>
  )
}

export default App;

