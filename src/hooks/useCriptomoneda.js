import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  color: #f1c40f;
  font-family: "Bebas Neue", cursive;
  font-weight: bold 700;
  font-size: 2.4rem;
  padding-right: 10px;
  margin-top: 2rem;
  display: block;
`;
const Select = styled.select`
  width: 100%;
  display: block;
  font-family: "Bebas Neue", cursive;
  padding: 1rem;
  font-size: 1.3rem;
  justify-content: center;
  margin-top: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
`;

const useCriptomoneda = (label, stateInitial, opciones) => {
  //state del hook
    const [state, actualizarState] = useState(stateInitial);
 


  const SelecCripto = () => (
    <Fragment>
      <Label>{label}</Label>
      <Select onChange={(e) => actualizarState(e.target.value)} value={state}>
        <option value="">--Seleccione --</option>
        {opciones.map((opciones) => (
          <option key={opciones.CoinInfo.Id} value={opciones.CoinInfo.Name}>
            {opciones.CoinInfo.FullName}
          </option>
        ))}
      </Select>
    </Fragment>
  );

  //retora state , interface y funcion state
  return [state, SelecCripto, actualizarState];
};

export default useCriptomoneda;
