/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-undef */
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Form from './pages/Acess';
import Contratos from './pages/Contratosnf';
import React from 'react';
import DadosNF from './pages/DadosNF';
function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          < Route path="/Contratos" element={<Contratos />} />
          <Route path="/dadosNF" element={<DadosNF />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
