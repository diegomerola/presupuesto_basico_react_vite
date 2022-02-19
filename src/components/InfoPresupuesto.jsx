import React, { useState, useEffect } from "react";

const InfoPresupuesto = ({ presupuesto, gastos }) => {
  // State para gastado
  const [gastado, setGastado] = useState(0);

  // State para disponible
  const [disponible, setDisponible] = useState(0);

  // useEffect para cambios en gastos
  useEffect(() => {
    // Calcular gastado:
    const totalGastado = gastos.reduce(
      (total, gastoActual) => total + gastoActual.cantidad,
      0
    );

    // Actualizar gastado
    setGastado(totalGastado);

    // Calcular disponible:
    const totalDisponible = presupuesto - totalGastado;

    // Actualizar disponible:
    setDisponible(totalDisponible);
  }, [gastos]);

  return (
    <div>
      <h2>InfoPresupuesto</h2>
      <div className="row ">
        <div>Grafica Circular</div>
        <div>
          <p className="alert alert-primary">Presupuesto:{presupuesto}</p>
          <p
            className={
              disponible < presupuesto / 2
                ? "alert alert-danger"
                : "alert alert-primary"
            }
          >
            Disponible :{disponible}
          </p>
          <p className="alert alert-primary">Gastado:{gastado}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoPresupuesto;
