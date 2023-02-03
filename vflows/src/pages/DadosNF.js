/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Users } from '../components/users';
import LOGO from '../img/logo.png';
import { ContratosEM } from '../components/ContratosEM';


import './DadosNF.css';
function contratos() {
  return (
    <div className='container'>
      <img src={LOGO} class="rounded float-left fundo " alt="..."></img>
      <h2 className='text-center position-relative'>PAGAMENTO DE FORNECEDOR</h2>
      {/* Razoa social,Nome fantasia e cnpj */}
      <div className='row'>
        <div className='col-15'>
          <div>
            {Users.map((user) => (
              <div className='form-group'>
                <label for='RazaoSocial'>Razão Social:</label>
                <p className='form-control' id='RazaoSocial'>{user.RazaoSocial}</p>
                <label for='NomeFantasia'>Nome Fantasia:</label>
                <p className='form-control' id='NomeFantasia'>{user.NomeFantasia}</p>
                <label for='CNPJ'>CNPJ:</label>
                <p className='form-control' id='CNPJ'>{user.CNPJ}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <h2 className='text-center position-relative'>DADOS NOTA FISCAL</h2>
      <div className='row'>
        <div className='col-15'>
          <div>
            {ContratosEM.map((contrato) => (
              <div className='form-group'>
                <label for='NumeroNF'>Codigo Do Contrato</label>
                <p className='form-control' id='NumeroNF'>{contrato.codigoContrato}</p>
                <label for="nomeContrato">Nome do Contrato</label>
                <p className='form-control' id='nomeContrato'>{contrato.NomeContrato}</p>
                {/*input para numero da nota data de emissao/vencimento e o valor da nota */}
                <label for='NumeroNF'>Numero da Nota Fiscal</label>
                <input type='text' className='form-control' id='NumeroNF' placeholder='Numero da Nota Fiscal'></input>
                <label for='DataEmissao'>Data de Emissão</label>
                <input type='date' className='form-control' id='DataEmissao' placeholder='Data de Emissão'></input>
                <label for='DataVencimento'>Data de Vencimento</label>
                <input type='date' className='form-control' id='DataVencimento' placeholder='Data de Vencimento'></input>
                <label for='ValorNF'>Valor da Nota Fiscal</label>
                <input type='text' className='form-control' id='ValorNF' placeholder='R$1500,00'></input>
              </div>
            ))}
          </div>
          <input type="checkbox" id="check" name="check" value="check"></input>
          <label for="check">Retencao de Impostos</label>

          <div className='form-group'>
            <label for='ISSQN'>ISSQN</label>
            <input type='text' className='form-control' id='ISSQN' placeholder='ISSQN'></input>
            <label for='IRRF'>IRRF</label>
            <input type='text' className='form-control' id='IRRF' placeholder='IRRF'></input>
            <label for='CSLL'>CSLL</label>
            <input type='text' className='form-control' id='CSLL' placeholder='CSLL'></input>
            <label for='COFINS'>COFINS</label>
            <input type='text' className='form-control' id='COFINS' placeholder='COFINS'></input>
            <label for='INSS'>INSS</label>
            <input type='text' className='form-control' id='INSS' placeholder='INSS'></input>
            <label for='PIS'>PIS</label>
            <input type='text' className='form-control' id='PIS' placeholder='PIS'></input>
          </div>
          <input type="checkbox" id="check" name="check" value="check"></input>
          <label for="check">Retencao Tecnica</label>
          <div className='form-group'>
            <label for='RetencaoTecnica'>Valor</label>
            <input type='text' className='form-control' id='RetencaoTecnica' placeholder='Valor'></input>
            <label for='RetencaoTecnica'>Percentual</label>
            <input type='text' className='form-control' id='RetencaoTecnica' placeholder='Percentual'></input>
          </div>
          {/*upload de imagens */}
          <div className='form-group'>
            <label for='upload'>Anexar NF </label>
            <input type='file' className='form-control-file' id='upload'></input>
          </div>
        </div>

      </div>
      <div className='bottom__CONTAINER'>
        <button className='BTN__CONTAINER2' href="/">Anterior</button>
        <button className='BTN__CONTAINER1' href="/dadosNF">Próximo</button>
      </div>

      <img src={LOGO} class="rounded float-left fundo " alt="..."></img>
      <footer className='footer'>
        <div className='container'>
          <span className='text-muted'>© 2023 - Vflows - Todos os direitos reservados</span>
        </div>
      </footer>
    </div>

  )
}

export default contratos