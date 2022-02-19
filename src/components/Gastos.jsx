import React from "react";

const Gastos = ({ gasto, eliminarGasto, setGastoEditar }) => {
  // Destructuring de gasto
  const { cantidad, categoria, nombre } = gasto;
  return (
    <div className="gastos-realizados">
      <div>
        <span className="gasto">${cantidad}</span>
      </div>
      <div>
        <p className="categoria">{categoria}</p>
        <p className="nombre-gasto">{nombre}</p>
      </div>
      <div>
        <input
          type="button"
          className="button"
          value="Editar"
          onClick={() => setGastoEditar(gasto)}
        />
        <input
          type="button"
          className="button"
          value="Borrar"
          onClick={() => eliminarGasto(gasto)}
        />
      </div>
    </div>
  );
};
/* const Gastos = ({ gasto, eliminarGasto }) => {
  return (
    <div className="row listado-gastos-col">
      <div className="one-third column">
        <p className="">{gasto.categoria}</p>
        <p className="">{gasto.nombre}</p>
      </div>
      <div className="one-third column">
        <span className="">${gasto.cantidad}</span>
      </div>
      <div className="one-third column">
        <input type="button" className="button" value="Editar" />
        <input
          type="button"
          className="button"
          value="Borrar"
          onClick={() => eliminarGasto(gasto.id)}
        />
      </div>
    </div>
  );
}; */

export default Gastos;
