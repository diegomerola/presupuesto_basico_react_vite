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
