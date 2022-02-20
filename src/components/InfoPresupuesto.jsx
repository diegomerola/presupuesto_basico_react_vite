import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const InfoPresupuesto = ({ presupuesto, gastos }) => {
  // State para gastado
  const [gastado, setGastado] = useState(0);

  // State para disponible
  const [disponible, setDisponible] = useState(0);

  // State para porcentaje
  const [porcentaje, setPorcentaje] = useState(0);

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

    // Calcular porcentaje gastado:
    const nuevoPorcentaje = (
      ((presupuesto - totalDisponible) / presupuesto) *
      100
    ).toFixed(0);

    // Actualizar porcentaje:
    setPorcentaje(Number(nuevoPorcentaje));
  }, [gastos]);

  return (
    <div className="infoPresupuesto">
      <h2>InfoPresupuesto</h2>
      <div className="row circular">
        <CircularProgressbar
          value={porcentaje}
          text={`${porcentaje}% Gastado`}
          styles={buildStyles({
            pathColor: porcentaje >= 75 ? "#DC2626" : "#1EAEDB",
            trailColor: "#F5F5F5",
            textColor: porcentaje >= 75 ? "#DC2626" : "#1EAEDB",
          })}
        />
      </div>
      <div className="row ">
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
          <input
            type="button"
            value={"Reiniciar App"}
            className="button u-full-width"
          />
        </div>
      </div>
    </div>
  );
};

export default InfoPresupuesto;
