import './verCitas.css'
import { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/es';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const VerCitas = () => {

    moment.locale('es');

    const [showModal, setShowModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [activeButton, setActiveButton] = useState(null);
    const [activeButton1, setActiveButton1] = useState(null);


    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };
    const handleButtonClick1 = (buttonName) => {
        setActiveButton1(buttonName);
    };

    const handleEventClick = event => {
        setSelectedEvent(event);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedEvent(null);
    };
    const localizer = momentLocalizer(moment);

    const messages = {
        previous: 'Anterior', // Cambia el texto del botón "Anterior"
        today: 'Hoy', // Cambia el texto del botón "Hoy"
        next: 'Siguiente', // Cambia el texto del botón "Siguiente"
        month: 'Mes', // Cambia el texto del botón "Mes"
        week: 'Semana', // Cambia el texto del botón "Semana"
        day: 'Día', // Cambia el texto del botón "Día"
        agenda: 'Agenda', // Cambia el texto del botón "Agenda"
        date: 'Fecha', // Cambia el texto del botón "Fecha"
        time: 'Hora', // Cambia el texto del botón "Hora"
        event: 'Evento', // Cambia el texto del botón "Evento"
        showMore: total => `Mostrar ${total} más`, // Cambia el texto para mostrar más eventos

    };

    const events = [
        {
            title: 'Reunión',
            start: new Date(2024, 1, 13, 10, 0),
            end: new Date(2024, 1, 13, 12, 0),
        },
        {
            title: 'Almuerzo',
            start: new Date(2024, 1, 14, 12, 0),
            end: new Date(2024, 1, 14, 13, 0),
        },
    ];

    const CustomToolbar = toolbar => {
        const goToBack = () => {
            toolbar.date.setMonth(toolbar.date.getMonth() - 1);
            toolbar.onNavigate('prev');
            handleButtonClick('prev')
        };
        const goToToday = () => {
            toolbar.onNavigate('TODAY');
            handleButtonClick('today')
        };

        const goToNext = () => {
            toolbar.date.setMonth(toolbar.date.getMonth() + 1);
            toolbar.onNavigate('next');
            handleButtonClick('next')
        };

        const onViewMonth = () => {
            toolbar.onView('month')
            handleButtonClick1('month')
        }

        const onViewWeek = () => {
            toolbar.onView('week')
            handleButtonClick1('week')
        }
        const onViewDay = () => {
            toolbar.onView('day')
            handleButtonClick1('day')
        }
        const onViewAgenda = () => {
            toolbar.onView('agenda')
            handleButtonClick1('agenda')
        }

        return (
            <div className="rbc-toolbar">
                <span className="rbc-btn-group-angle">
                    <button type="button" onClick={goToBack} className={`rbc-btn ${activeButton === 'prev' ? 'active' : ''}`}><i class="fa-solid fa-angle-left"></i></button>
                    <button type="button" onClick={goToToday} className={`rbc-btn ${activeButton === 'today' ? 'active' : ''}`}>Hoy</button>
                    <button type="button" onClick={goToNext} className={`rbc-btn ${activeButton === 'next' ? 'active' : ''}`}><i class="fa-solid fa-angle-right"></i></button>
                </span>
                <span className="rbc-toolbar-label">{toolbar.label}</span>
                <span className="rbc-btn-group-agenda">
                    <button type="button" onClick={onViewMonth} className={`rbc-btn-agenda ${activeButton1 === 'month' ? 'active' : ''}`}>Mes</button>
                    <button type="button" onClick={onViewWeek} className={`rbc-btn-agenda ${activeButton1 === 'week' ? 'active' : ''}`}>Semana</button>
                    <button type="button" onClick={onViewDay} className={`rbc-btn-agenda ${activeButton1 === 'day' ? 'active' : ''}`}>Día</button>
                    <button type="button" onClick={onViewAgenda} className={`rbc-btn-agenda ${activeButton1 === 'agenda' ? 'active' : ''}`}>Agenda</button>
                </span>
            </div>
        );
    };


    return (
        <div className='container'>
            <div className='cont-calendar'>
                <div className='container-fluid w-100' style={{ height: 500 }}>
                    <Calendar
                        localizer={localizer}
                        events={events}
                        startAccessor="start"
                        endAccessor="end"
                        style={{ margin: '50px' }}
                        messages={messages}
                        onSelectEvent={handleEventClick}
                        components={{
                            toolbar: CustomToolbar
                        }}
                    />
                </div>
                <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedEvent && selectedEvent.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* Agrega aquí el contenido del modal, por ejemplo, detalles del evento */}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Cerrar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}
export default VerCitas