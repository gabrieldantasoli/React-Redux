import React from "react";
import './reservas.css';
import { MdDelete } from 'react-icons/md'
import { useSelector } from "react-redux";

export default () => {
    const reserves = useSelector(state => state.reserva);

    return(
        <div>
            <h1>Você solicitou {reserves.length} Reserva</h1>
            
            {reserves.map(reserve => {
                return (
                    <div className="reservas" key={reserve.id}>
                        <img src={reserve.image} alt={reserve.title} />
                        <div className="info">
                        <strong>{reserve.title}</strong>
                        <span>Quantidade : {reserve.amount}</span>
                        </div>
                        <button type="button" onClick={() => {}}>
                            <MdDelete />
                        </button>
                    </div>
                )
            })}

            <footer>
                <button>Solicitar Reservas</button>
            </footer>
        </div>
    )
}