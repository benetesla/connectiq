/* eslint-disable react-hooks/rules-of-hooks */
import React ,{ useRef }from 'react'
import{ Form} from '@unform/web'
import LOGO from '../img/logo.png';
import './Form.css';

function form() {
   
    const ValidarCNPJ = () => {
       //se for valido ir  para a pagina cadastros validos
       if(formRef.current.getFieldValue('cnpj') === '123456789'){
        window.location.href = '/cadastrovalido';
         }else{
            alert('CNPJ invalido');
         }
    }
    const formRef = useRef();

    function handleSubmit(data, {reset}){
        console.log(data);
        reset();
    }
       
    return (
        <div className="Card">
            <img src={LOGO} alt="logo" />
            <h1>VFLOWS</h1>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <label className='label'>CNPJ</label>
                <input className='Input' name="cnpj" placeholder="CNPJ" />
                <button className='botao' type="submit" onClick={ValidarCNPJ}>Acessar</button>
            </Form>
            
        </div>
    )
}

export default form