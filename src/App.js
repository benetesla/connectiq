
import './App.css';
import React from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Registration from './components/Register/Registration';
function App() {
  return (
    
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/registration" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Registration />} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
