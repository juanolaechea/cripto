import React, { useEffect,useState}from 'react';
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda.js';
import useCriptomoneda from '../hooks/useCriptomoneda.js';
import axios from 'axios';



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

const Error = styled.p`

    color:#fff;
    font-family: "Bebas Neue", cursive;
    font-size: 1.3rem;
    font-weight:bold;
    background-color: red;
    padding:1rem;
    text-align:center;

`;



const Formulario = ({ guardarMoneda, guardarCripto }) => {
  //STATE CRIPTOMONEDA
  const [listaCripto, guardarCriptos] = useState([]);
  const [error, guardarError] = useState(false);

  const MONEDAS = [
    { codigo: "USD", nombre: "Dolar de Estados Unidos" },
    { codigo: "EUR", nombre: "Euro de Union Europea" },
    { codigo: "ARG", nombre: "Peso Argentino" },
  ];
  //useMoneda
  const [moneda, SelectMoneda] = useMoneda("Elige tu moneda", "", MONEDAS);
  //useCriptomoneda
  const [cripto, SelectCripto] = useCriptomoneda(
    "Elige tu criptomoneda",
    "",
    listaCripto
  );

  //llamado API
  useEffect(() => {
    const consultaApi = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

      const resultado = await axios.get(url);
      guardarCriptos(resultado.data.Data);
    };
    consultaApi();
  }, []);

  const cotizarMoneda = (e) => {
    e.preventDefault();

    if (moneda === "" || cripto === "") {
      guardarError(true);
      return;
    }
    //pasar al componente principal
    guardarError(false);
    guardarMoneda(moneda);
    guardarCripto(cripto);
  };

  return (
    <form onSubmit={cotizarMoneda}>
      {error ? <Error>Complete todo los campos </Error> : null}
      <SelectMoneda />

      <SelectCripto />
      <Boton type="submit" value="Calcular" />
    </form>
  );
};
 
export default Formulario;