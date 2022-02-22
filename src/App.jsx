import { useState, useEffect } from "react";
import Header from "./components/Header";
import { v4 as uuidv4 } from "uuid";

function App() {
  // State para presupuesto:
  const [presupuesto, setPresupuesto] = useState(
    // Obtener presupuesto del LS. Sino existe asignarle = 0:
    JSON.parse(localStorage.getItem("presupuesto")) ?? 0
  );

  // State para arreglo de gastos:
  const [gastos, setGastos] = useState(
    // Obtener gastos del LS. Sino existe asignarle = []
    JSON.parse(localStorage.getItem("gastos")) ?? []
  );

  // State para presupuesto valido
  const [isValid, setIsValid] = useState(false);

  // State para editar un gasto
  const [gastoEditar, setGastoEditar] = useState({});

  // State para filtro
  const [filtro, setFiltro] = useState("");

  // State para gastos filtrados
  const [gastosFiltrados, setGastosFiltrados] = useState({});

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
      // Crear id
      gasto.id = uuidv4();

      // Agregar a gastos
      setGastos([...gastos, gasto]);
    }
  };

  // Funcion para eliminar un gasto
  const eliminarGasto = (gastoEliminar) => {
    // Buscar gasto
    const gastosActualizado = gastos.filter(
      (gasto) => gasto.id !== gastoEliminar.id
    );
    // Actualizar arreglo de gastos
    setGastos(gastosActualizado);
  };

  // useEfect para cambios en filtro
  useEffect(() => {
    // Si existe algun filtro:
    if (filtro) {
      // Filtrar los gastos que coincidan con el filtro:
      const gastosActualizado = gastos.filter(
        (elemento) => elemento.categoria === filtro
      );
      // Actualizar gastos filtrados:
      setGastosFiltrados(gastosActualizado);
    }
  }, [filtro, gastos]);

  // LS para presupuesto (al iniciar la app)
  useEffect(() => {
    // Poner presupuesto en LS:
    localStorage.setItem("presupuesto", JSON.stringify(presupuesto));

    // Si presupuesto > 0
    if (presupuesto > 0) {
      // Activar pantalla de Formulario:
      setIsValid(true);
    }
  }, []);

  // LS para cambios en presupuesto:
  useEffect(() => {
    // Poner presupuesto en LS:
    localStorage.setItem("presupuesto", presupuesto);
  }, [presupuesto]);

  // LS para cambios en gastos
  useEffect(() => {
    // Poner gastos en LS:
    localStorage.setItem("gastos", JSON.stringify(gastos));
  }, [gastos]);

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
        setFiltro={setFiltro}
        filtro={filtro}
        gastosFiltrados={gastosFiltrados}
      />
    </div>
  );
}

export default App;
