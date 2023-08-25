// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../estilos/Proyectos.css";
import Proyecto from "./Proyecto";
import React from "react";

function Proyectos() {
  return (
    <section className="proyectos container-fluid">
      <p>Alguno de mis proyectos</p>
      <Proyecto
        nombreProyecto="Portafolio Personal"
        //list=""
        descripcion="Un poco de informacion acerca de mi, mis proyectos personales y tecnologias que utilizo"
        linkWeb="#"
        linkGitHub="#"
      />
      <Proyecto
        nombreProyecto="test2"
        descripcion="test2"
        linkWeb="#"
        linkGitHub="#"
      />
    </section>
  );
}

export default Proyectos;