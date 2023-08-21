// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";

function Tecnologia(props) {
  return (
    <i className={`${props.icono} d-flex justify-content-center col-4`}></i>
  );
}

export default Tecnologia;
