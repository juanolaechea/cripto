import React, { useEffect , useState}from "react";
import styled from "@emotion/styled";
import imagen from "./cripto.png";
import Formulario from "./components/Formulario";
import Cotizacion from "./components/Cotizacion";
import axios from 'axios';
import Spinner from "./components/Spinner";

const Conteiner = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 25px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

function App() {

  const [moneda, guardarMoneda] = useState('');
  const [cripto, guardarCripto] = useState('');
  const [cotizacion, guardarCotizacion] = useState({});
  const [spinner, mostrarSpinner] = useState(false);

  useEffect(() => {

  
    const consultarApi = async () => {
      if (moneda === "") return;

      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`;

      const resultado = await axios.get(url);

     
      
      mostrarSpinner(true);

      setTimeout(() => {

        mostrarSpinner(false);
         guardarCotizacion(resultado.data.DISPLAY[cripto][moneda]);
        

       }, 3000);

    }
    consultarApi();
   
  }, [moneda, cripto]);

  console.log(cotizacion);

  //cambiar de spinner a resultado
  const componente = (spinner) ? <Spinner /> : <Cotizacion cotizacion={cotizacion} />;

  return (
    <Conteiner>
      <div>
        <Imagen src={imagen} alt={"cripto"} />
      </div>
      <div>
        <Heading>
          <h2>Cotizador de Criptomonedas al Instante</h2>
        </Heading>

        <Formulario
          guardarMoneda={guardarMoneda}
          guardarCripto={guardarCripto}
        />

        {componente}
        
      </div>
    </Conteiner>
  );
}

export default App;
