/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import LOGO from '../img/logo.png';
import { Users } from './users';
import { ContratosEM } from './ContratosEM';
import './contratos.css';
function contratos() {
  return (
    <>
    <div className="cartaoFonecedore">
      <img src={LOGO} alt="Logo" />
      <h4>PAGAMENTO DE FORNECEDOR</h4>
      {Users.map((user) => (
              <div className="card ">
                <div className="card-body">
                  <div className='CentroCard1'>
                    <h5 className="card-title RazaoRight">Razao Social :{user.RazaoSocial}</h5>
                    <h5 className="card-text RazaoRight">Nome Fantasia:{user.NomeFantasia}</h5>
                    <h5 className="card-subtitle mb-2 text-muted RazaoRight"> CNPJ: {user.CNPJ}</h5>
                  </div>
                  <h6 className='CentroCard'>Contratos Vinculados</h6>
                  
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">Nome do Contrato</th>
                        <th scope="col">Codigo do Contrato</th>
                        <th scope="col">Retenção</th>
                        <th scope="col">Detalhes</th>
                        </tr>
                        </thead>
                        <tbody>
                    {ContratosEM.map((contrato) => (
                      <tr>
                        
                        <td>
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                              {contrato.NomeContrato}
                            </label>
                          </div>
                          </td>                       
                        <td>{contrato.codigoContrato}</td>
                        <td>
                          
                          <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{ width: contrato.retencao }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{contrato.retencao}</div>
                          </div>

                        </td>
                        <td>
                          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                          <i className="fas fa-info-circle"></i>
                          </button>
                        </td>
                        </tr>
                        ))}
                        </tbody>
                        </table>                  
                </div>
              </div>
            ))}
                        
           </div>
           <div className='Botao'>
            <button type="button" className="btn btn-success">Proximo</button>
           <button type="button" className="btn btn-warning">Anterior</button>
           </div>  
          
           </>
  )
}

export default contratos