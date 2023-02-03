/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import LOGO from '../img/logo.png';
import { Users } from '../components/users';
import { ContratosEM } from '../components/ContratosEM';
import { DetalhesContrato } from '../components/DetalhesContrato';
import './contratos.css';
function contratos() {
  return (
    <>
      <div className='Conteudo__Fundo'>
        <div className='container'>
          <div className='top__CONTAINER'>
            <img className='IMG__CONTAINER' src={LOGO} alt="Logo" />
            <h4 className='H1__CONTAINER'>PAGAMENTO DE FORNECEDOR</h4>
          </div>

          <div>
            {Users.map((user) => (
              <div className='table__CONTAINER'>
                <div className='table__CONTAINER__LEFT'>
                  <h5 className='table__CONTAINER__LEFT'>RazaoSocial: {user.RazaoSocial}</h5>
                  <h5 className='table__CONTAINER__LEFT'>NomeFantasia : {user.NomeFantasia}</h5>
                </div>
                <h5 className='table__CONTAINER__RIGHT'>CNPJ: {user.CNPJ}</h5>
              </div>
            ))}
          </div>
          {/*tabela de contratos */}
          <h2 className='H2__CONTAINER'>Contratos Vinculados</h2>
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
                      < i className="fas fa-search"></i>
                      {/*mapear os contratos e exibir em popUp */}
                      {DetalhesContrato.map((detalhes) => (
                        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Detalhes do Contrato</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div className="modal-body">
                                <h5>Nome do Contrato: {detalhes.NomeContrato}</h5>
                                <h5>Codigo do Contrato: {detalhes.codigoContrato}</h5>
                                <h5>Razao Social: {detalhes.RazaoSocial}</h5>
                                <h5>CNPJ: {detalhes.CNPJ}</h5>
                                <h5>Nome Fantasia: {detalhes.NomeFantasia}</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className='bottom__CONTAINER'>
            <button className='BTN__CONTAINER2' href="/">Anterior</button>
            <button className='BTN__CONTAINER1' href="/dadosNF">Próximo</button>
          </div>
          <div className='footer__CONTAINER'>
            <im className='IMG__FOOTER' src={LOGO} alt="Logo" />
            <p className='P__CONTAINER'>© 2023 Vflows. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default contratos