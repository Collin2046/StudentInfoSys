
import Login from './Login';
import './App.css';
import Main from './Main';
import Test from './test';
import Signup from './Signup'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const App=() =>{
  
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
