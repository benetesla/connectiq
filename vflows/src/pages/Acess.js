/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef } from 'react'
import { IMaskInput } from 'react-imask';
import LOGO from '../img/logo.png';
import './Acess.css';

function form() {
    const ref = useRef(null);
    const inputRef = useRef(null);
    //verifica se o CNPJ é valido ou não e se for ele retorna true e vai para a pagina de contratos se nao ele retorna false e um alerta
    const ValidarCNPJ = () => {
         const cnpj = inputRef.current.value;
        
        const regex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
        
        if (regex.test(cnpj)) {
              window.location.href = "/contratos";
        } else {
            
            alert('CNPJ invalido');
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