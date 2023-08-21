// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../estilos/Hero.css";
import React from "react";
import Contacto from "./Contacto";

function Hero() {
  return (
    <section class="hero container-fluid">
      <div class="row">
        <div class="col-md-7 sobre-mi">
          <div class="row">Hey! I'm Paulo...</div>
          <div class="row">
            <p>
              Soy un desarrollador web Full Stack y estudiante avanzado de
              Ingeniería en Sistemas de Información en{" "}
              <a href="https://www.frcu.utn.edu.ar/">UTN FRCU</a>, actualmente
              cursando el 4to año de la carrera. Actualmente me encuentro en
              Argentina.
            </p>
          </div>
          <div class="row container contacto">
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
          <p>Estas son las tecnologías que utilizo, cambio</p>
          <div class="row">
            <p className="col">HTML5</p>
            <p className="col">CSS3</p>
            <p className="col">JavaScript</p>
            <p className="col">PHP</p>
          </div>
          <div class="row">
            <p className="col">SQL</p>
            <p className="col">AJAX</p>
            <p className="col">Bootstrap</p>
            <p className="col">React</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
