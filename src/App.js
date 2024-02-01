import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Inicio from "./Components/Inicio/Inicio";
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Header />
      <Routes>
        <Route exact path="/" element={ <Inicio /> } />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
