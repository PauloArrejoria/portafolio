// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../estilos/Proyecto.css";
import React from "react";

function Proyecto(props) {
  const tecnologias = props.tecnologias;
  return (
    <div className="proyecto containet-fluid">
      <div className="datos">
        <h3 className="text-white">{props.nombreProyecto}</h3>

        <ul className="d-flex flex-wrap">
          {tecnologias.map((tecnologia, index) => (
            <li className="" key={index}>
              {tecnologia}
            </li>
          ))}
        </ul>

        <p className="descripcion">{props.descripcion}</p>
        <div className="d-flex flex-wrap align-items-center justify-content-center">
          <a
            className="px-2 link-proyecto text-white"
            href={`${props.linkWeb}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Web
          </a>
          <a
            className="px-2 link-proyecto text-white"
            href={`${props.linkGitHub}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Proyecto;
