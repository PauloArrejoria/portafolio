// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../estilos/Hero.css";
import React from "react";
import Contacto from "./Contacto";
import Tecnologia from "./Tecnologia";

function Hero() {
  return (
    <section class="hero container-fluid">
      <div class="row">
        <div class="col-md-7 sobre-mi">
          <div class="row">
            <h2>Sobre mí</h2>
          </div>
          <div class="row">
            <p>
              Soy desarrollador web Full Stack y estudiante avanzado de
              Ingeniería en Sistemas de Información en{" "}
              <a href="https://www.frcu.utn.edu.ar/">UTN FRCU</a>, me encuentro
              cursando el 4to año de la carrera. Actualmente me encuentro en
              Argentina.
            </p>
          </div>
          <div class="d-flex flex-wrap align-items-center justify-content-center">
            <Contacto
              link="https://www.linkedin.com/in/paulo-arrejoria-1070b4245/"
              icono="bi bi-linkedin"
            />
            <Contacto
              link="https://github.com/PauloArrejoria"
              icono="bi bi-github"
            />
            <Contacto
              link="mailto:arrejoriapaulo@gmail.com"
              icono="bi bi-envelope-fill"
            />
          </div>
        </div>
        <div class="col-md-5 tecnologias">
          <h2>Tecnologías</h2>
          <Tecnologia tecnologia="HTML5" />
          <Tecnologia tecnologia="CSS3" />
          <Tecnologia tecnologia="JavaScript" />
          <Tecnologia tecnologia="PHP" />
          <Tecnologia tecnologia="SQL" />
          <Tecnologia tecnologia="AJAX" />
          <Tecnologia tecnologia="Bootstrap" />
          <Tecnologia tecnologia="React" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
