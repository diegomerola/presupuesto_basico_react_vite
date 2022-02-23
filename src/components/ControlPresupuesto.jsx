import React from "react";
import Formulario from "./Formulario";
import InfoPresupuesto from "./InfoPresupuesto";
import ListadoGastos from "./ListadoGastos";
import Filtros from "./Filtros";

const ControlPresupuesto = ({
  agregarGasto,
  gastos,
  presupuesto,
  eliminarGasto,
  setGastoEditar,
  gastoEditar,
  setFiltro,
  filtro,
  gastosFiltrados,
  setPresupuesto,
  setIsValid,
  setGastos,
}) => {
  return (
    <>
      <div className="contenido-principal contenido">
        <div className="row">
          <div className="one-half column">
            <Formulario agregarGasto={agregarGasto} gastoEditar={gastoEditar} />
          </div>
          <div className="one-half column">
            <InfoPresupuesto
              presupuesto={presupuesto}
              gastos={gastos}
              setPresupuesto={setPresupuesto}
              setIsValid={setIsValid}
              setGastos={setGastos}
              setFiltro={setFiltro}
              setGastoEditar={setGastoEditar}
            />
          </div>
        </div>
        <div className="row">
          <Filtros setFiltro={setFiltro} />
        </div>
        <div className="row">
          <ListadoGastos
            gastos={gastos}
            eliminarGasto={eliminarGasto}
            setGastoEditar={setGastoEditar}
            filtro={filtro}
            gastosFiltrados={gastosFiltrados}
          />
        </div>
      </div>
    </>
  );
};

export default ControlPresupuesto;
