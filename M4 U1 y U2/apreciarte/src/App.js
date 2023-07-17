import React from "react";
import "./Estilo.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Productos from "./Productos";
import Nosotros from "./Nosotros";
import Contacto from "./Contacto";
import Testimonio from "./Testimonio";
import Inicio from "./Inicio";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Productos" element={<Productos />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/Testimonio" element={<Testimonio />} />
        <Route path="/Contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
