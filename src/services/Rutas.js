import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../paginas/Home";
import FormDatos from "../GUI/FormDatos";
import Especificar from "../componentes/Especificar";
import FormInformacion from "../GUI/formInformacion";

function Rutas() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/datos" element={<FormDatos />} />
        <Route path="/especificar" element={<Especificar/>}/>
        <Route path="/informacion" element={<FormInformacion/>}/>
        
      </Routes>
    </div>
  );
}

export default Rutas;
