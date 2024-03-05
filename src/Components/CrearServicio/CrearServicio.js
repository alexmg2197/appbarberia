import './crearServicio.css'
import { Formik } from 'formik';
import { React, useState, useEffect } from "react";
import { getAPI, postAPI } from "../../utils/useAxios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";


const CrearServicio = () => {
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
                            descripcion: '',
                            precio: '',
                        }}
                        validate={values => {
                            const errors = {};
                            if (!values.nombre) errors.nombre = 'El nombre es indispensable'
                            if (!values.descripcion) errors.descripcion = 'La descripcion es indespensable'
                            if (!values.precio) errors.precio = 'El precio es indespensable'
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            const servicio = {
                                'Nombre': values.nombre,
                                'Descripcion': values.descripcion,
                                'Precio': values.precio,
                            }
                            postAPI('CrearServicio', servicio)
                                .then((res) => {
                                    if (res.tipo === 'mensaje') {
                                        toast.success(res.data, {
                                            autoClose: 1500,
                                            position: 'top-right'
                                        })
                                    }
                                })
                            Swal.fire({
                                title: "Se ha creado el Servicio",
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
                                            <label htmlFor="nombre" className="form-label" >Servicio:</label>
                                            <input type="text" className={`form-control ${errors.nombre && 'mark_wrong'}`} id="nombre" onChange={(val) => { setFieldValue('nombre', val.target.value) }} value={values.nombre} />
                                            <p className="eti-err">{errors.nombre}</p>
                                        </div>
                                        <div className="form-group col-6">
                                            <label htmlFor="descripcion" className="form-label" >Descripcion:</label>
                                            <input type="text" className={`form-control ${errors.descripcion && 'mark_wrong'}`} id="descripcion" onChange={(val) => { setFieldValue('descripcion', val.target.value) }} value={values.descripcion} />
                                            <p className="eti-err">{errors.descripcion}</p>
                                        </div>
                                        <div className="form-group col-6">
                                            <label htmlFor='precio' className='form-label'>Precio:</label>
                                            <input type="text" className={`form-control ${errors.precio && 'mark_wrong'}`} id="precio" onChange={(val) => { setFieldValue('precio', val.target.value) }} value={values.precio} />
                                            <p className="eti-err">{errors.precio}</p>
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
export default CrearServicio