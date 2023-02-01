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
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={LOGO} className='LOGOTIPO' alt="logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  <i className="fas fa-home"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contratos">
                  <i className="fas fa-file-invoice-dollar"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/dadosNF">
                  <i className="fas fa-file-invoice"></i>
                </a>
              </li>
              <li className='nav-item'>
                <button className="btn btn-dark" onClick={DarKmode}> <i className="fas fa-moon"></i></button>
              </li>
            </ul>

          </div>
        </div>
      </nav>
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
