import React from "react";
import './reservas.css';
import { MdDelete } from 'react-icons/md'

export default () => {
    return(
        <div>
            <h1>Você solicitou 1 Reserva</h1>
            <div className="reservas">
                <img src="https://sujeitoprogramador.com/wp-content/uploads/2019/12/maceio.jpg" alt="sei la" />
                <div className="info">
                <strong>Viagem Maceio 7 dias</strong>
                <span>Quantidade : 2</span>
                </div>
                <button type="button" onClick={() => {}}>
                    <MdDelete />
                </button>
            </div>

            <footer>
                <button>Solicitar Reservas</button>
            </footer>
        </div>
    )
}