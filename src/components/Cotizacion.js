import React from 'react';
import styled from '@emotion/styled';

const ReultadoDiv = styled.div`
    color:#fff;
    font-family: "Bebas Neue", cursive;
`;

const Parrafos = styled.p`
    
    font-size:20px;
    
`;

const Span = styled.span`

    color:orange;

`;



const Cotizacion = ({ cotizacion }) => {
    
    if (Object.keys(cotizacion).length === 0) return null;
    console.log(cotizacion);

    return (
      <ReultadoDiv>
        <Parrafos>
          El precio es : <Span>{cotizacion.PRICE}</Span>
        </Parrafos>
        <Parrafos>
          El precio maximo en el dia es : <Span>{cotizacion.HIGHDAY}</Span>
        </Parrafos>
        <Parrafos>
          El precio minimoen el dia es : <Span>{cotizacion.LOWDAY}</Span>
        </Parrafos>
        <Parrafos>
          Ultima actualizacion : <Span>{cotizacion.LASTUPDATE}</Span>
        </Parrafos>
      </ReultadoDiv>
    );
}
 
export default Cotizacion;