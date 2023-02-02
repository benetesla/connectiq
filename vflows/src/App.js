/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-undef */
import './App.css';
import LOGO from './img/logo.png';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Form from './pages/Acess';
import Contracts from './pages/contratos';
import React from 'react';
import DadosNF from './pages/DadosNF';
function App() {
  const DarKmode = () => {
    if (document.body.classList.contains('dark')) {
      document.body.classList.remove('dark');
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = '#000';
    } else {
      document.body.style.backgroundColor = '#1b1b1b';
      document.body.style.color = '#edf5f4';
      document.body.classList.add('dark');
    }
  }
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          < Route path="/contratos" element={<Contracts />} />
          <Route path="/dadosNF" element={<DadosNF />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
