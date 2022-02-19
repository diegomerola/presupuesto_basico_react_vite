import { useState, useEffect } from "react";
import Header from "./components/Header";
import { v4 as uuidv4 } from "uuid";

function App() {
  // State para presupuesto
  const [presupuesto, setPresupuesto] = useState(0);

  // State para presupuesto valido
  const [isValid, setIsValid] = useState(false);

  // State para arreglo de gastos
  const [gastos, setGastos] = useState([]);

  // State para editar un gasto
  const [gastoEditar, setGastoEditar] = useState({});

  // Funcion para agregar un gasto al arreglo de gastos
  const agregarGasto = (gasto) => {
    if (gasto.id) {
      // Buscar gasto, si coincide el id reemplazar el gasto
      console.log(gasto.id);
      const gastosActualizados = gastos.map((gastoState) =>
        gastoState.id === gasto.id ? gasto : gastoState
      );
      // Actualizar el arreglo de gastos
      setGastos(gastosActualizados);

      // Limpiar gastoEditar
      setGastoEditar({});
    } else {
      console.log(gasto.id);
      // Crear id
      gasto.id = uuidv4();

      // Agregar a gastos
      setGastos([...gastos, gasto]);
    }
  };

  // Funcion para eliminar un gasto
  const eliminarGasto = (gastoEliminar) => {
    // Buscar gasto
    const gastosActualizado = gastos.filter((gasto) => {
      return gasto.id !== gastoEliminar.id;
    });
    // Actualizar arreglo de gastos
    setGastos(gastosActualizado);
  };
  // useEffect para cambios en gastoEditar
  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      console.log("HAy un gasto para editar...");
    }
  }, [gastoEditar]);

  return (
    <div className="container">
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValid={isValid}
        setIsValid={setIsValid}
        agregarGasto={agregarGasto}
        gastos={gastos}
        eliminarGasto={eliminarGasto}
        setGastoEditar={setGastoEditar}
        gastoEditar={gastoEditar}
      />
    </div>
  );
}

export default App;
