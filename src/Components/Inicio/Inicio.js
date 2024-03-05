import "./inicio.css";
import { React, useState } from "react";
import CrearCita from "../CrearCita/CrearCita";
import Sidebar from "../Sidebar/Sidebar";
import VerCitas from "../VerCitas/VerCitas";
import Cobro from "../Cobro/Cobro";
import CrearCliente from "../CrearCliente/CrearCliente";
import VerCliente from "../VerCliente/VerCliente";
import CrearBarbero from "../CrearBarbero/CrearBarbero";
import VerBarbero from "../VerBarbero/VerBarbero";
import CrearServicio from "../CrearServicio/CrearServicio";
import VerServicio from "../VerServicio/VerServicio";

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
          5: <VerCliente />,
          6: <CrearBarbero />,
          7: <VerBarbero />,
          8: <CrearServicio />,
          9: <VerServicio />
        }[mostrar]
      }


    </div>
  );
};
export default Inicio;
