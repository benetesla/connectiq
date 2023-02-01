/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef, useEffect } from 'react'
import ReactInputMask from 'react-input-mask';
import { Form } from '@unform/web';
import LOGO from '../img/logo.png';
import './Acess.css';

function form() {
    const formRef = useRef(null);
    const ValidarCNPJ = () => {
        const cnpj = formRef.current.getFieldValue('cnpj');
        if (cnpj === '') {
            alert('CNPJ vazio');
            document.querySelector('.botao').disabled = true;
        } else if (cnpj.length < 18) {
            alert('CNPJ invalido');
            document.querySelector('.botao').disabled = true;
        }
        else {
            document.querySelector('.botao').disabled = false;
            window.location.href = '/contratos';
        }

    }



    return (
        <div className="Card">
            <img src={LOGO} alt="logo" />
            <h1>Pagamento de Fornecedor</h1>
            <Form ref={formRef}>
                <ReactInputMask mask="99.999.999/9999-99" maskChar=" " name="cnpj" placeholder="CNPJ" />
            </Form>

            <button className='botao' onClick={ValidarCNPJ}>Enviar</button>

        </div>
    )
}

export default form