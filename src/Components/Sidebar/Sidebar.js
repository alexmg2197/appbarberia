import { React, useEffect, useState } from "react";
import './sidebar.css'
import Logo from '../../img/55f40fef78a2107cc324218c819679c8.png'

const Sidebar = ({ setMostrar }) => {

    const [mostrarCitas, setMostrarCitas] = useState(false);
    const [mostrarClientes, setMostrarClientes] = useState(false);
    const [mostrarBarberos, setMostrarBarberos] = useState(false);
    const [mostrarServicios, setMostrarServicios] = useState(false);

    const toggleVisibilidadCitas = () => {
        setMostrarCitas(!mostrarCitas);
    };
    const toggleVisibilidadClientes = () => {
        setMostrarClientes(!mostrarClientes);
    };
    const toggleVisibilidadBarbero = () => {
        setMostrarBarberos(!mostrarBarberos);
    };
    const toggleVisibilidadServicios = () => {
        setMostrarServicios(!mostrarServicios);
    };

    return (

        <aside className="main-sidebar elevation-4">

            <div className='text-center'>
                <a href="/" className='brand-link'>
                    <img src={Logo} alt="logo" className='img' />
                </a>
            </div>

            <div className='sidebar'>
                <nav className='mt-2'>
                    <ul className="nav nav-pills nav-sidebar flex-column"
                        data-widget="treeview"
                        role="menu"
                        data-accordion="false">
                        <li className="nav-item">
                            <a className="nav-link" href="/"><i className="nav-icon fas fa-home"></i> <p>Home</p> </a>
                        </li>
                        <li className="nav-item menu-open">
                            <a className="nav-link" onClick={toggleVisibilidadCitas}>
                                <i className="nav-icon fa-sharp fa-solid fa-calendar-days"></i>
                                <p>Cita
                                    {mostrarCitas ? < i className="right fas fa-angle-left"></i> : < i className="right fas fa-angle-up"></i>}

                                </p>
                            </a>
                            {
                                mostrarCitas && (
                                    <ul className="nav nav-treeview">
                                        <div className="">
                                            <li className="nav-item ">
                                                <a className="nav-link " onClick={() => { setMostrar(1) }}>
                                                    <i className="nav-icon fa-solid fa-calendar-plus"></i>
                                                    <p>Crear Cita
                                                    </p>
                                                </a>
                                            </li>
                                            <li className="nav-item ">
                                                <a className="nav-link " onClick={() => { setMostrar(2) }}>
                                                    <i className="nav-icon fa-solid fa-eye"></i> <p>Ver Citas</p>
                                                </a>
                                            </li>
                                        </div>
                                    </ul>
                                )
                            }
                        </li>
                        <li className="nav-item menu-open">
                            <a className="nav-link" onClick={toggleVisibilidadClientes}>
                                <i className="nav-icon fa-solid fa-user-tie"></i>
                                <p>Clientes      {mostrarClientes ? < i className="right fas fa-angle-left"></i> : < i className="right fas fa-angle-up"></i>}</p>
                            </a>
                            {
                                mostrarClientes && (
                                    <ul className="nav nav-treeview">
                                        <div className="">
                                            <li className="nav-item ">
                                                <a className="nav-link " onClick={() => { setMostrar(4) }}>
                                                    <i class="nav-icon fa-solid fa-user-plus"></i>
                                                    <p>Registrar Cliente
                                                    </p>
                                                </a>
                                            </li>
                                            <li className="nav-item ">
                                                <a className="nav-link " onClick={() => { setMostrar(5) }}>
                                                    <i className="nav-icon fa-solid fa-eye"></i> <p>Ver Clientes</p>
                                                </a>
                                            </li>
                                        </div>
                                    </ul>
                                )
                            }
                        </li>
                        <li className="nav-item menu-open">
                            <a className="nav-link" onClick={toggleVisibilidadBarbero}>
                                <i className="nav-icon fa-solid fa-scissors"></i>
                                <p>Barbero
                                    {mostrarBarberos ? < i className="right fas fa-angle-left"></i> : < i className="right fas fa-angle-up"></i>}
                                </p>
                            </a>
                            {
                                mostrarBarberos && (
                                    <ul className="nav nav-treeview">
                                        <div className="">
                                            <li className="nav-item ">
                                                <a className="nav-link " onClick={() => { setMostrar(6) }}>
                                                    <i class=" nav-icon fa-solid fa-square-plus"></i>
                                                    <p>Registrar Barbero
                                                    </p>
                                                </a>
                                            </li>
                                            <li className="nav-item ">
                                                <a className="nav-link " onClick={() => { setMostrar(7) }}>
                                                    <i className="nav-icon fa-solid fa-eye"></i> <p>Ver Barberos</p>
                                                </a>
                                            </li>
                                        </div>
                                    </ul>
                                )
                            }
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={toggleVisibilidadServicios}>
                                <i className="nav-icon fa-solid fa-clipboard-list"></i>
                                <p>Servicios {mostrarServicios ? < i className="right fas fa-angle-left"></i> : < i className="right fas fa-angle-up"></i>}</p>
                            </a>
                            {
                                mostrarServicios && (
                                    <ul className="nav nav-treeview">
                                        <div className="">
                                            <li className="nav-item ">
                                                <a className="nav-link " onClick={() => { setMostrar(8) }}>
                                                    <i class=" nav-icon fa-solid fa-square-plus"></i>
                                                    <p>Registrar Servicio
                                                    </p>
                                                </a>
                                            </li>
                                            <li className="nav-item ">
                                                <a className="nav-link " onClick={() => { setMostrar(9) }}>
                                                    <i className="nav-icon fa-solid fa-eye"></i> <p>Ver Servicios</p>
                                                </a>
                                            </li>
                                        </div>
                                    </ul>
                                )
                            }
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => { setMostrar(3) }}><i className="nav-icon fa-solid fa-hand-holding-dollar"></i> <p>Cobro</p> </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/"><i className="nav-icon fa-solid fa-cart-flatbed"></i> <p>Inventario</p> </a>
                        </li>
                    </ul>
                </nav>
            </div>

        </aside >

    )
}

export default Sidebar