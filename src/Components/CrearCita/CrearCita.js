import './crearCita.css'
import { React, useState, useEffect } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';

const CrearCita = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState('12:00'); // Establece la hora inicial
    console.log(selectedTime)
    const handleTimeChange = (time) => {
        setSelectedTime(time);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    return (
        <div>
            <div className="d-flex justify-content-center">
                <h1 classNameName='text-center'>Hola estas en Crear Cita</h1>
            </div>
            <div className="d-flex justify-content-center">
                <div className="card card-primary">
                    <div className="card-header">
                        <h3 className="card-title">
                            Crear Cita
                        </h3>
                    </div>
                    <form>
                        <div className="card-body">
                            <div className="form-group">
                                <label>Fecha de Cita:</label>
                                <div className="input-group date" id="reservationdate" data-target-input="nearest">
                                    <DatePicker
                                        selected={selectedDate}
                                        onChange={handleDateChange}
                                        className="form-control datetimepicker-input"
                                        dateFormat="yyyy-MM-dd"
                                    />
                                    <div className="input-group-append" data-target="#reservationdate" data-toggle="datetimepicker">
                                        <div className="input-group-text"><i className="fa fa-calendar"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Hora de Cita:</label>
                                <div className="input-group date" id="reservationtime" data-target-input="nearest">
                                    <TimePicker
                                        value={selectedTime}
                                        onChange={handleTimeChange}
                                        disableClock={true} // Desactiva el reloj selector de tiempo para mostrar solo el campo de entrada
                                        clearIcon={null} // Desactiva el icono de limpieza (borrado) del campo de entrada
                                        className="form-control datetimepicker-input"
                                    />
                                    <div className="input-group-append" data-target="#reservationtime" data-toggle="datetimepicker">
                                        <div className="input-group-text"><i className="fa fa-clock-o"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Cliente</label>
                                <select class="form-control">
                                    <option>option 1</option>
                                    <option>option 2</option>
                                    <option>option 3</option>
                                    <option>option 4</option>
                                    <option>option 5</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Barbero</label>
                                <select class="form-control">
                                    <option>option 1</option>
                                    <option>option 2</option>
                                    <option>option 3</option>
                                    <option>option 4</option>
                                    <option>option 5</option>
                                </select>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                        </div>

                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}
export default CrearCita