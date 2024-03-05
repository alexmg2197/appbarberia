import './crearBarbero.css'
import { Formik } from 'formik';
import { React, useState, useEffect } from "react";
import { getAPI, postAPI } from "../../utils/useAxios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";


const CrearBarbero = () => {

    return (
        <>
            <div className="d-flex justify-content-center">
                <div className="card card-primary mt-3">
                    <div className="card-header">
                        <h3 className="card-title">
                            Registrar Barbero
                        </h3>
                    </div>
                    <Formik
                        initialValues={{
                            nombre: '',
                            correo: '',
                            direccion: '',
                            telefono: ''
                        }}
                        validate={values => {
                            const errors = {};
                            if (!values.nombre) errors.nombre = 'El nombre es indispensable'
                            if (!values.correo) errors.correo = 'El correo es indespensable'
                            if (!values.direccion) errors.direccion = 'La direccion es indespensable'
                            if (!values.telefono) errors.telefono = 'El telefono es indespensable'
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            const barbero = {
                                'Direccion': values.direccion,
                                'Nombre': values.nombre,
                                'Telefono': values.telefono,
                                'Correo': values.correo,
                            }
                            postAPI('CrearBarbero', barbero)
                                .then((res) => {
                                    if (res.tipo === 'mensaje') {
                                        toast.success(res.data, {
                                            autoClose: 1500,
                                            position: 'top-right'
                                        })
                                    }
                                })
                            Swal.fire({
                                title: "Se ha creado el Barbero",
                                icon: "success",
                                confirmButtonColor: "#3085d6",
                                confirmButtonText: "Ok"
                            })
                                .then((result) => {
                                    if (result.isConfirmed) {
                                        resetForm()
                                    }
                                });
                            setSubmitting(false);
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
                                            <label htmlFor="nombre" className="form-label" >Nombre de Cliente:</label>
                                            <input type="text" className={`form-control ${errors.nombre && 'mark_wrong'}`} id="nombre" onChange={(val) => { setFieldValue('nombre', val.target.value) }} value={values.nombre} />
                                            <p className="eti-err">{errors.nombre}</p>
                                        </div>
                                        <div className="form-group col-6">
                                            <label htmlFor="direccion" className="form-label" >Direccion:</label>
                                            <input type="text" className={`form-control ${errors.direccion && 'mark_wrong'}`} id="direccion" onChange={(val) => { setFieldValue('direccion', val.target.value) }} value={values.direccion} />
                                            <p className="eti-err">{errors.direccion}</p>
                                        </div>
                                        <div className="form-group col-6">
                                            <label htmlFor='codigo' className='form-label'>Telefono:</label>
                                            <input type="text" className={`form-control ${errors.telefono && 'mark_wrong'}`} id="telefono" onChange={(val) => { setFieldValue('telefono', val.target.value) }} value={values.telefono} />
                                            <p className="eti-err">{errors.telefono}</p>
                                        </div>
                                        <div className="form-group col-6">
                                            <label htmlFor="correo" className="form-label" >Correo Electronico:</label>
                                            <input type="email" className={`form-control ${errors.correo && 'mark_wrong'}`} id="correo" onChange={(val) => { setFieldValue('correo', val.target.value) }} value={values.correo} />
                                            <p className="eti-err">{errors.correo}</p>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Registrar</button>
                                    </div>
                                </form>
                            )
                        }
                    </Formik>

                </div>

            </div>
        </>
    )

}
export default CrearBarbero