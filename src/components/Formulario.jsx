import React, { useState } from "react";
import Mensaje from "./Mensaje";

const Formulario = () => {
  // State para gasto:
  const [nombreGasto, setNombreGasto] = useState("");

  // State para cantidad:
  const [cantidadGasto, setCantidadGasto] = useState(0);

  // State para msj:
  const [msj, setMsj] = useState("");

  // Funcion para submit:
  const handleSubmit = (e) => {
    console.log("Enviando gasto...");
    // Detener submit:
    e.preventDefault();

    // Validar:
    if (
      // Si hay un error:
      nombreGasto.trim() === "" ||
      cantidadGasto <= 0 ||
      isNaN(cantidadGasto)
    ) {
      // Mostrar msj de error:
      setMsj("Gasto no valido");

      // Dsp de 3 segundos eliminar msj de error:
      setTimeout(() => {
        setMsj("");
      }, 2000);
      return;
    } else {
      // Sino hay error:
      // Limpiar msj de error:
      setMsj("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Agrega tus gatos aquí</h2>
        <Mensaje msj={msj} tipo={msj ? "alert-danger error" : ""} />
        <div className="campo">
          <label>Nombre Gasto</label>
          <input
            type="text"
            className="u-full-width"
            placeholder="Ej. Transporte"
            onChange={(e) => setNombreGasto(e.target.value)}
          />
        </div>
        <div className="campo">
          <label>Cantidad Gasto</label>
          <input
            type="number"
            className="u-full-width"
            placeholder="Ej. 300"
            value={cantidadGasto}
            onChange={(e) => setCantidadGasto(Number(e.target.value))}
          />
        </div>
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Agregar Gasto"
        />
      </form>
    </div>
  );
};

export default Formulario;
