import "./inicio.css";
import { React, useState } from "react";
import CrearCita from "../CrearCita/CrearCita";
import Sidebar from "../Sidebar/Sidebar";
import VerCitas from "../VerCitas/VerCitas";

const Inicio = () => {

  const [mostrar, setMostrar] = useState(0)

  return (
    <div>
      <Sidebar setMostrar={setMostrar} />

      {
        {
          0: <h1 className="text-center">Hola barberia</h1>,
          1: <CrearCita />,
          2: <VerCitas />
        }[mostrar]
      }


    </div>
  );
};
export default Inicio;
