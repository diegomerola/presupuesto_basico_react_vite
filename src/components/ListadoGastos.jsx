import React from "react";
import Gastos from "./Gastos";

const ListadoGastos = ({
  gastos,
  eliminarGasto,
  setGastoEditar,
  filtro,
  gastosFiltrados,
}) => {
  return (
    <div className="listado-gastos">
      {filtro.length > 0 ? (
        gastosFiltrados.length > 0 ? (
          <>
            <h2>Listado de Gastos</h2>
            {gastosFiltrados.map((gasto) => (
              <Gastos
                key={gasto.id}
                gasto={gasto}
                eliminarGasto={eliminarGasto}
                setGastoEditar={setGastoEditar}
              />
            ))}
          </>
        ) : (
          <h2>No hay gastos en esta categoria</h2>
        )
      ) : (
        <>
          <h2>{gastos.length > 0 ? "Listado de Gastos" : "No hay gastos"}</h2>
          {gastos.map((gasto) => (
            <Gastos
              key={gasto.id}
              gasto={gasto}
              eliminarGasto={eliminarGasto}
              setGastoEditar={setGastoEditar}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ListadoGastos;
