// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../estilos/Header.css";
import React from "react";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="google.com">
          Paulo Arrejoria
        </a>
        <div class="d-flex">
          <button class="btn btn-outline-success me-2">Boton Tema</button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
