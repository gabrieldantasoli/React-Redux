import React from "react";
import { Routes , Route } from "react-router-dom";

import Home from '../Pages/Home';
import Reservas from '../Pages/Reservas';

export default function Rotas() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reservas" element={<Reservas />} /> 
        </Routes>
    )
}