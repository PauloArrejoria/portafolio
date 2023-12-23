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
      <h2 className="d-flex">Algunos de mis proyectos</h2>
      <Proyecto
        nombreProyecto="Portafolio Personal"
        descripcion="Un poco de informacion acerca de mi, mis proyectos personales y tecnologias que utilizo"
        linkWeb="https://portafolio-ten-lake.vercel.app/"
        linkGitHub="https://github.com/PauloArrejoria/portafolio"
        tecnologias={["React", "Bootstrap", "CSS"]}
      />
      <Proyecto
        nombreProyecto="Weather App"
        descripcion="Una aplicacion que consume una API para comprobar el clima en las distintas ciudades del mundo"
        linkWeb="https://weather-app-rose-psi-40.vercel.app/"
        linkGitHub="https://github.com/PauloArrejoria/weather-app"
        tecnologias={["HTML", "CSS"]}
      />
    </section>
  );
}

export default Proyectos;
