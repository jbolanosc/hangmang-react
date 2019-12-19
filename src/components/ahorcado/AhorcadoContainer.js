import React, { Fragment, useState, useEffect } from "react";
import photo0 from "./img/Ahorcado0.gif";
import photo1 from "./img/Ahorcado1.gif";
import photo2 from "./img/Ahorcado2.gif";
import photo3 from "./img/Ahorcado3.gif";
import photo4 from "./img/Ahorcado4.gif";
import photo5 from "./img/Ahorcado5.gif";
import photo6 from "./img/Ahorcado6.gif";

const AhorcadoContainer = () => {
  const [palabra, setPalabra] = useState([]);
  const [letras, setLetras] = useState([]);
  const [letraUsuario, setLetraUsuario] = useState("");
  const [fallo, setFallo] = useState(0);
  var letraMostrar = [];
  var fallos = 0;

  const palabras = ["tiburon", "lobo", "delfin", "pulpo"];
  const listaFotos = [photo0, photo1, photo2, photo3, photo4, photo5, photo6];

  function comprobarLetraUsuario() {
    letraMostrar = letras;
    palabra.forEach((char, index) => {
      if (letraUsuario === char) {
        letraMostrar[index] = char;
        setLetras(letraMostrar);
        alert("Has acertado la letra " + char);
      }
    });

    if (!palabra.includes(letraUsuario)) {
      fallos = fallo + 1;
      setFallo(fallos);
      alert("Has fallado");
    }
    finalizarJuego();
  }

  const finalizarJuego = () => {
    if (!letras.includes("_")) {
      alert("Has ganado!!!");
      window.location.reload(true);
    }
    if (fallos === 6) {
      alert("Has Perdido!!! Era: " + palabra.join(""));
      window.location.reload(true);
    }
  };

  const handleChange = name => event => {
    setLetraUsuario(event.target.value);
  };

  useEffect(() => {
    var _ = require("lodash");
    const generarJuego = () => {
      let posicion = _.random(palabras.length - 1);
      let palabraGenerada = palabras[posicion];
      let palabraAdivinar = palabraGenerada.split("");
      setPalabra(palabraAdivinar);

      for (let char of palabraAdivinar) {
        letraMostrar.push("_");
      }
      console.log("letra mostrar" + letraMostrar[0]);
      setLetras(letraMostrar);
    };
    generarJuego();
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)"
      }}
    >
      <div>
        <img src={listaFotos[fallo]} />
      </div>
      <div className="form-group w-75 m-2 text-center">
        <input
          placeholder="Escribe la letra"
          className="form-control"
          type="text"
          onChange={handleChange("filter")}
          maxLength="1"
        />
        <button
          className="btn btn-warning"
          onClick={() => comprobarLetraUsuario()}
        >
          Enviar
        </button>
      </div>
      <div className="d-flex">
        {letras.map((letra, index) => {
          return (
            <div key={index} className="m-2">
              {letra}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AhorcadoContainer;
