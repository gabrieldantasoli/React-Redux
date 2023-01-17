import React from "react";
import { SiYourtraveldottv } from "react-icons/si";
import { Link } from "react-router-dom";
import './header.css';

export default () => {
    return(
        <header className="container">
            <Link to="/" >
                <SiYourtraveldottv className="logo"/> 
            </Link>

            <Link className="reserva" to="/reservas">
                <div>
                    <strong>My Reservations</strong>
                    <span>0 Reservations</span>
                </div>
            </Link>
        </header>
    )
}