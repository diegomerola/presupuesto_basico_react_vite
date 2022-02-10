import React from "react";
import Formulario from "./Formulario";

const ControlPresupuesto = () => {
  return (
    <div className="row contenido-principal contenido">
      <div className="one-half column">
        <Formulario />
      </div>
      <div className="one-half column">
        <h2>Componente Gastos</h2>
        <h2>Componente InfoPresupuesto</h2>
      </div>
    </div>
  );
};

export default ControlPresupuesto;
