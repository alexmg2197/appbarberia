import "./inicio.css";
import { React, useState } from "react";
import CrearCita from "../CrearCita/CrearCita";
import Sidebar from "../Sidebar/Sidebar";
import VerCitas from "../VerCitas/VerCitas";
import Cobro from "../Cobro/Cobro";
import CrearCliente from "../CrearCliente/CrearCliente";
import VerCliente from "../VerCliente/VerCliente";

const Inicio = () => {

  const [mostrar, setMostrar] = useState(0)

  return (
    <div>
      <Sidebar setMostrar={setMostrar} />

      {
        {
          0: <h1 className="text-center">Hola barberia</h1>,
          1: <CrearCita />,
          2: <VerCitas />,
          3: <Cobro />,
          4: <CrearCliente />,
          5: <VerCliente />
        }[mostrar]
      }


    </div>
  );
};
export default Inicio;
