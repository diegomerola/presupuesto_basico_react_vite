import React, { useState, useEffect } from "react";
import Mensaje from "./Mensaje";
import { animateScroll as scroll } from "react-scroll";

const Formulario = ({ agregarGasto, gastoEditar }) => {
  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      // Scroll al inicio de la pagina
      scroll.scrollToTop();

      // Cargar gastos para editar en el formulario
      setNombre(gastoEditar.nombre);
      setCantidad(gastoEditar.cantidad);
      setCategoria(gastoEditar.categoria);
      setId(gastoEditar.id);
    }
  }, [gastoEditar]);

  // State para gasto:
  const [nombre, setNombre] = useState("");

  // State para cantidad:
  const [cantidad, setCantidad] = useState(0);

  // State para categoria:
  const [categoria, setCategoria] = useState("");

  // State para id
  const [id, setId] = useState("");

  // State para msj:
  const [msj, setMsj] = useState("");

  // Funcion para submit:
  const handleSubmit = (e) => {
    // Detener submit:
    e.preventDefault();

    // Validar:
    if (
      // Si hay un error:
      nombre.trim() === "" ||
      cantidad <= 0 ||
      isNaN(cantidad) ||
      categoria === ""
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

      // Agregar gasto al arreglo de gastos
      agregarGasto({ nombre, cantidad, categoria, id });

      // Limpiar gastos
      setNombre("");
      setCantidad(0);
      setCategoria("");
      setId("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>{gastoEditar.id ? "Editar Gasto" : "Agrega tus gastos"}</h2>
        {msj ? (
          <Mensaje msj={msj} tipo={msj ? "alert-danger error" : ""} />
        ) : null}
        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>
          <input
            id="nombre"
            type="text"
            className="u-full-width"
            placeholder="Ej. Transporte"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            id="cantidad"
            type="number"
            className="u-full-width"
            placeholder="Ej. 300"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
          />
        </div>
        <div className="campo">
          <label htmlFor="categoria">Categoria</label>
          <select
            id="categoria"
            value={categoria}
            className="u-full-width"
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">-- Seleccione categoria --</option>
            <option value="ahorro">Ahorro</option>
            <option value="casa">Casa</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="tarjeta">Tarjeta</option>
            <option value="varios">Varios</option>
          </select>
        </div>
        <input
          type="submit"
          className="button-primary u-full-width"
          value={gastoEditar.id ? "Guardar" : "Agregar Gasto"}
        />
      </form>
    </div>
  );
};

export default Formulario;
