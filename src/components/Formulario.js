import React from 'react';
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda.js';



const Boton = styled.input`

    margin-top:20px;
    font-weight:bold;
    font-size:20px;
    padding:10px;
    border-radius:10px;
    border:none;
    background-color:#66a2fe;
    color:white;
    width:100%;
   
    transition: background-color .3s ease;

    &:hover{
        background-color:#326ac0;
        cursor: pointer;
    }


`;

const Formulario = () => {

    const [moneda, SelectMoneda, actualizarState] = useMoneda();
    return ( 

        <form>
            <SelectMoneda/>



            <Boton
                type="submit"
                value="Calcular"
            />
        </form>



     );
}
 
export default Formulario;