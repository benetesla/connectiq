
import './App.css';
import React from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Registration from './components/Register/Registration';
import { ToastContainer } from 'react-toastify';
import Appheader from './components/App/AppHeader';
import Customer from './components/Custom/Customer';
function App() {
  return (
    
    <div className="App">
     <ToastContainer theme='colored' position='top-center'></ToastContainer>
      <BrowserRouter>
      <Appheader></Appheader>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Registration/>}></Route>
        <Route path='/customer' element={<Customer/>}></Route>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
