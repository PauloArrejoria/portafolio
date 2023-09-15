// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../estilos/Tecnologia.css";
import React from "react";

function Tecnologia(props) {
  return (
    <img
      className="tecnologia col-3"
      src={require(`../imagenes/${props.tecnologia}.svg`)}
      alt={props.tecnologia}
    />
  );
}

export default Tecnologia;
