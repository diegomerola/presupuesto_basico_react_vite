import React from "react";
import Gastos from "./Gastos";

const ListadoGastos = ({ gastos, eliminarGasto, setGastoEditar }) => {
  return (
    <div className="listado-gastos">
      <h2>{gastos.length > 0 ? "Listado de Gastos" : "No hay gastos"}</h2>
      {gastos.map((gasto) => (
        <Gastos
          key={gasto.id}
          gasto={gasto}
          eliminarGasto={eliminarGasto}
          setGastoEditar={setGastoEditar}
        />
      ))}
    </div>
  );
};

export default ListadoGastos;
