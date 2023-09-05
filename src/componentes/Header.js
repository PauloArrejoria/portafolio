// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../estilos/Header.css";
import React from "react";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a className="enlace-nav" href="google.com">
          Paulo Arrejoria
        </a>
        <div class="d-flex">
          <button class="btn-tema">
            <i class="bi bi-brightness-high"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
