import './crearCita.css'
import { Formik } from 'formik';
import { React, useState, useEffect } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import { getAPI } from "../../utils/useAxios";

const CrearCita = () => {

    const [clientes, setClientes] = useState([]);
    const [barberos, setBarberos] = useState([]);
    const [servicios, setServicios] = useState([]);

    useEffect(() => {
        getAPI('ListarServicios')
            .then((response) => {
                setServicios(response.data)
                console.log(response.data)
            })
    }, [])

    useEffect(() => {
        getAPI('ListarClientes')
            .then((response) => {
                setClientes(response.data)
                console.log(response.data)
            })
    }, [])

    useEffect(() => {
        getAPI('ListarBarberos')
            .then((response) => {
                setBarberos(response.data)
                console.log(response.data)
            })
    }, [])

    return (
        <div>
            <div className="d-flex justify-content-center">
                <div className="card card-primary mt-3">
                    <div className="card-header">
                        <h3 className="card-title">
                            Crear Cita
                        </h3>
                    </div>
                    <Formik
                        initialValues={{
                            date: null,
                            hora: null,
                            cliente: '',
                            barbero: '',
                            servicio: ''

                        }}
                        validate={values => {
                            const errors = {};
                            // if (!values.date) errors.date = 'La fecha es indespensable'
                            // if (!values.hora) errors.hora = 'La hora es indespensable'
                            if (!values.cliente) errors.cliente = 'El cliente es indespensable'
                            if (!values.barbero) errors.barbero = 'El barbero es indespensable'
                            if (!values.servicio) errors.servicio = 'El servicio es indespensable'
                            return errors;
                        }}
                        onSubmit={(values, { resetForm }) => {
                            const jsonValues = JSON.stringify(values);
                            let a = values.date
                            let b = a.toLocaleDateString('es-ES') //Fecha en formato dd/mm/yyyyy
                            console.log(b)
                            console.log(values.hora)
                            console.log(jsonValues);
                            // const cita {

                            // }
                        }}
                    >
                        {
                            ({
                                values,
                                errors,
                                isSubmitting,
                                setFieldValue,
                                handleSubmit
                            }) => (

                                <form onSubmit={handleSubmit}>
                                    <div className="card-body row">
                                        <div className="form-group col-6">
                                            <label>Fecha de Cita:</label>
                                            <div className="input-group date" id="reservationdate" data-target-input="nearest">
                                                <DatePicker
                                                    selected={values.date}
                                                    onChange={(date) => setFieldValue('date', date)}
                                                    dateFormat="dd/MM/yyyy"
                                                    clockIcon={<i className="fa fa-calendar"></i>}
                                                />
                                                <div className="input-group-append" data-target="#reservationdate" data-toggle="datetimepicker">
                                                    <div className="input-group-text"><i className="fa fa-calendar"></i></div>
                                                </div>
                                            </div>
                                            {/* <p>{ errors.date}</p> */}
                                        </div>
                                        <div className="form-group col-6">
                                            <label>Hora de Cita:</label>
                                            <div className="input-group date" id="reservationtime" data-target-input="nearest">
                                                <TimePicker
                                                    value={values.hora}
                                                    onChange={(time) => setFieldValue('hora', time)}
                                                    disableClock={true} // Desactiva el reloj selector de tiempo para mostrar solo el campo de entrada
                                                />
                                                <div className="input-group-append" data-target="#reservationtime" data-toggle="datetimepicker">
                                                    <div className="input-group-text"><i className="fa-solid fa-clock"></i></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group col-6">
                                            <label htmlFor='cliente'>Cliente</label>
                                            <select id='cliente' className="form-control" onChange={(val) => { setFieldValue('cliente', val.target.value) }} value={values.cliente}>
                                                <option selected>---Selecciona un Cliente---</option>
                                                {
                                                    clientes.map((cliente) => {
                                                        return (
                                                            <option key={cliente.IdCliente} value={cliente.IdCliente}>{cliente.Nombre}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                            <p>{errors.cliente}</p>
                                        </div>
                                        <div className="form-group col-6">
                                            <label>Barbero</label>
                                            <select className="form-control" onChange={(val) => { setFieldValue('barbero', val.target.value) }} value={values.barbero}>
                                                <option selected>---Selecciona un Barbero---</option>
                                                {
                                                    barberos.map((barbero) => {
                                                        return (
                                                            <option key={barbero.IdBarbero} value={barbero.IdBarbero}>{barbero.Nombre}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                            <p>{errors.barbero}</p>
                                        </div>
                                        <div className="form-group col-6">
                                            <label>Servicio</label>
                                            <select className="form-control" onChange={(val) => { setFieldValue('servicio', val.target.value) }} value={values.servicio}>
                                                <option selected>---Selecciona un Servicio---</option>
                                                {
                                                    servicios.map((servicio) => {
                                                        return (
                                                            <option key={servicio.IdServicio} value={servicio.IdServicio}>{servicio.Nombre}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                            <p>{errors.servicio}</p>
                                        </div>

                                    </div>
                                    <div className="card-footer">
                                        <button type="submit" className="btn btn-primary">Agendar</button>
                                    </div>
                                </form>
                            )
                        }
                    </Formik>

                </div>

            </div>
        </div>
    )
}
export default CrearCita