import React,{Fragment, useState} from 'react';


const useMoneda = () => {
  //state del hook
  const [state, actualizarState] = useState("");

  const Seleccionar = () => (
    <Fragment>
      <label>Moneda</label>
      <select>
        <option value="">Peso Argentino</option>
      </select>
    </Fragment>
  );

  //retora state , interface y funcion state
  return [state, Seleccionar, actualizarState];
}

export default useMoneda;