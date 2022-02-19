import React, { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = ({ presupuesto, setPresupuesto, setIsValid }) => {
  // State para msj
  const [msj, setMsj] = useState("");

  // Funcion para submit:
  const handleSubmit = (e) => {
    // Detener submit:
    e.preventDefault();

    // Validar:
    // Si hay un error:
    if (presupuesto <= 0 || presupuesto === "") {
      // Mostrar msj:
      setMsj("Presupuesto no valido");
      return;
    } else {
      // Sino hay errores:
      // Limpiar msj:
      setMsj("");

      //Activar presupuesto valido
      setIsValid(true);

      console.log("Todo ok...");
    }
  };
  return (
    <div className="contenido-principal contenido container">
      <h2>Coloca tu presupuesto</h2>
      <Mensaje msj={msj} tipo={msj ? "alert-danger error" : ""} />
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          value={presupuesto}
          onChange={(e) => setPresupuesto(Number(e.target.value))}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir Presupuesto"
        />
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
