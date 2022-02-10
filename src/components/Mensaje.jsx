import React from "react";

const Mensaje = ({ msj, tipo }) => {
  return <div className={`alert ${tipo}`}>{msj}</div>;
};

export default Mensaje;
