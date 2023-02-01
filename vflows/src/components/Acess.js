/* eslint-disable react-hooks/rules-of-hooks */
import React,{useRef} from 'react'
import ReactInputMask from 'react-input-mask';
import { IMaskInput } from 'react-imask';
import LOGO from '../img/logo.png';
import './Acess.css';

function form() {
   const ref = useRef(null);
   const inputRef = useRef(null);
   //verifica se o CNPJ é valido ou não e se for ele retorna true e vai para a pagina de contratos se nao ele retorna false e um alerta
   const ValidarCNPJ = () => {
    //pegar o valor do input
    const cnpj = inputRef.current.value;
    if (cnpj.length < 18) {
        alert('CNPJ invalido')
    } else {
        alert('CNPJ valido')
    }

   }
   

    return (
        <div className="Card">
            <img src={LOGO} alt="logo" />
            <h1>Pagamento de Fornecedor</h1>
            <IMaskInput
                mask="00.000.000/0000-00"
                inputRef={inputRef}
                onAccept={(value, mask) => {
                    console.log('onAccept', value, mask.unmaskedValue);
                }}
                onComplete={(value, mask) => {
                    console.log('onComplete', value, mask.unmaskedValue);
                }}
                onReject={(value, mask) => {
                    console.log('onReject', value, mask.unmaskedValue);
                }}
                onClear={(value, mask) => {
                    console.log('onClear', value, mask.unmaskedValue);
                }}
                ref={ref}
                unmask={true}
                lazy={false}
                overwrite={true}
                autofix={true}
                placeholder='ENSIRA O CNPJ'
                className='input'
            />            
            <button className='botao' onClick={ValidarCNPJ}>Enviar</button>

        </div>
    )
}

export default form