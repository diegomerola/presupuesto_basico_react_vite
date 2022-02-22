import React from "react";
import NuevoPresupuesto from "./NuevoPresupuesto";
import ControlPresupuesto from "./ControlPresupuesto";

const Header = ({
  presupuesto,
  setPresupuesto,
  isValid,
  setIsValid,
  agregarGasto,
  gastos,
  eliminarGasto,
  setGastoEditar,
  gastoEditar,
  setFiltro,
  filtro,
  gastosFiltrados,
}) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>
      {isValid ? (
        <ControlPresupuesto
          agregarGasto={agregarGasto}
          gastos={gastos}
          presupuesto={presupuesto}
          eliminarGasto={eliminarGasto}
          setGastoEditar={setGastoEditar}
          gastoEditar={gastoEditar}
          setFiltro={setFiltro}
          filtro={filtro}
          gastosFiltrados={gastosFiltrados}
        />
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValid={setIsValid}
          gastos={gastos}
        />
      )}
    </header>
  );
};

export default Header;
