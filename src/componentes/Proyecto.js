// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../estilos/Proyecto.css";
import React from "react";

function Proyecto(props) {
  //const itemList = props.list.map((item, index) => <li key={index}>{item}</li>);
  //<ul>{itemList}</ul>

  return (
    <div className="proyecto containet-fluid">
      <div className="datos">
        <h3>{props.nombreProyecto}</h3>

        <p>{props.descripcion}</p>
        <div className="d-flex flex-wrap align-items-center justify-content-center">
          <a
            className="px-2"
            href={`${props.linkWeb}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Web
          </a>
          <a
            className="px-2"
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
