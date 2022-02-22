import React from "react";

const Filtros = ({ setFiltro }) => {
  return (
    <div className="gastos-filtrados">
      <form>
        <h2>Filtrar Gastos</h2>
        <div className="campo">
          <select
            id="categoria"
            className="u-full-width"
            onChange={(e) => setFiltro(e.target.value)}
          >
            <option value="">-- Todas las categorias --</option>
            <option value="ahorro">Ahorro</option>
            <option value="casa">Casa</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="tarjeta">Tarjeta</option>
            <option value="varios">Varios</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filtros;
