import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Homepage from './components/Homepage/Homepage';
import { useState } from 'react';

function App() {
  const [user, setLoginUser] = useState({});

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={
          user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />
        } />
        <Route path='Register' element={<Register />} />
        <Route path='Login' element={<Login setLoginUser={setLoginUser} />} />
        <Route path='*' element={"404 Error not found "} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
