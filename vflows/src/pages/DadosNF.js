/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Users } from '../components/users';
import LOGO from '../img/logo.png';
import { ContratosEM } from '../components/ContratosEM';


import './DadosNF.css';
function contratos() {
  return (
    <div className='container'>
      <img src={LOGO} class="rounded float-left " alt="..."></img>
      <h2 className='text-center position-absolute'>PAGAMENTO DE FORNECEDOR</h2>
     {/* <Users /> */}
    </div>

  )
}

export default contratos