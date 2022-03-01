import React from "react";

const Gastos = ({ gasto, eliminarGasto, setGastoEditar }) => {
  // Destructuring de gasto
  const { cantidad, categoria, nombre } = gasto;
  return (
    <div className="row gastos-realizados">
      <div className="one-third column">
        <p className="nombre-gasto">{nombre}</p>
      </div>
      <div className="one-third column">
        <p className="categoria">{categoria}</p>
        <p className="cantidad">${cantidad}</p>
      </div>
      <div className="one-third column">
        <input
          type="button"
          className="button-primary boton-gastos"
          value="Editar"
          onClick={() => setGastoEditar(gasto)}
        />
        <input
          type="button"
          className="boton-gastos button-secondary"
          value="Borrar"
          onClick={() => eliminarGasto(gasto)}
        />
      </div>
    </div>
  );
};

export default Gastos;
