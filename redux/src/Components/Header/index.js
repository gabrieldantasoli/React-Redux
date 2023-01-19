import React from "react";
import { SiYourtraveldottv } from "react-icons/si";
import { Link } from "react-router-dom";
import './header.css';
import { useSelector } from "react-redux";

export default () => {
    const reserveSize = useSelector(state => state.reserva.length);

    return(
        <header className="container">
            <Link to="/" >
                <SiYourtraveldottv className="logo"/> 
            </Link>

            <Link className="reserva" to="/reservas">
                <div>
                    <strong>My Reservations</strong>
                    <span>{reserveSize} Reservations</span>
                </div>
            </Link>
        </header>
    )
}