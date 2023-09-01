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
        descripcion="Un poco de informacion acerca de mi, mis proyectos personales y tecnologias que utilizo"
        linkWeb="#"
        linkGitHub="#"
        tecnologias={["React", "Bootstrap", "CSS"]}
      />
      <Proyecto
        nombreProyecto="Portafolio Personal"
        descripcion="Un poco de informacion acerca de mi, mis proyectos personales y tecnologias que utilizo"
        linkWeb="#"
        linkGitHub="#"
        tecnologias={["React", "Bootstrap", "CSS"]}
      />
      <Proyecto
        nombreProyecto="Portafolio Personal"
        descripcion="Un poco de informacion acerca de mi, mis proyectos personales y tecnologias que utilizo"
        linkWeb="#"
        linkGitHub="#"
        tecnologias={["React", "Bootstrap", "CSS"]}
      />
    </section>
  );
}

export default Proyectos;
