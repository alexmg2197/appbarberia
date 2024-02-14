import { BrowserRouter, Routes, Route } from "react-router-dom";
import DateAdapter from '@mui/lab/AdapterDayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/es'; // Importa la localización de español
import 'moment-timezone';
import moment from 'moment-timezone';
import './App.css';
import Inicio from "./Components/Inicio/Inicio";
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";

function App() {
  dayjs.locale('es');
  moment.tz.setDefault('America/Mexico_City');
  return (
    <BrowserRouter>
      <Sidebar />
      <Header />
      <Routes>
        <Route exact path="/" element={<Inicio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
