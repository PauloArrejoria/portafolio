// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../estilos/Contacto.css";
import React from "react";

function Contacto(props) {
  return (
    <a
      className="col"
      href={`${props.link}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className={`${props.icono} d-flex justify-content-center`}></i>
    </a>
  );
}

export default Contacto;
