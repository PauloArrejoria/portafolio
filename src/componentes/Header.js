// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../estilos/Header.css";
import React from "react";

function Header() {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    document
      .getElementById("btn-theme")
      .setAttribute("class", "bi bi-brightness-high");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    document.getElementById("btn-theme").setAttribute("class", "bi bi-moon");
  };
  const themeButton = () => {
    const theme = document.querySelector("body").getAttribute("data-theme");
    if (theme === "dark") {
      setLightMode();
    }
    if (theme === "light") {
      setDarkMode();
    }
  };
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a className="enlace-nav" href="google.com">
          Paulo Arrejoria
        </a>
        <div class="d-flex">
          <button class="btn-tema" onClick={themeButton}>
            <i class="bi bi-brightness-high" id="btn-theme"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
