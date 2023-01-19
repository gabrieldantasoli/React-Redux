import React from "react";
import './reservas.css';
import { removeReserve , updateAmount } from "../../store/modules/reserva/actions";
import { MdAddCircle, MdDelete, MdRemoveCircle } from 'react-icons/md'
import { useSelector , useDispatch } from "react-redux";

export default () => {
    const dispatch = useDispatch();

    const reserves = useSelector(state => state.reserva);

    function handleRemove(id) {
        dispatch(removeReserve(id));
    }

    function incrementAmount(reserve) {
        dispatch(updateAmount(reserve.id, reserve.amount + 1));
    }

    function decrementAmount(reserve) {
        dispatch(updateAmount(reserve.id, reserve.amount - 1));
    }

    return(
        <div>
            <h1>Você solicitou {reserves.length} Reserva</h1>
            
            {reserves.map(reserve => {
                return (
                    <div className="reservas" key={reserve.id}>
                        <img src={reserve.image} alt={reserve.title} />
                        <div className="info">
                            <strong>{reserve.title}</strong>

                            <button type="button" onClick={() => incrementAmount(reserve)}>
                                <MdAddCircle className="crement"/>
                            </button>
                            
                            <span>Qtd : {reserve.amount}</span>
                            <button type="button" onClick={() => decrementAmount(reserve)}>
                                <MdRemoveCircle className="crement"/>
                            </button>
                            
                        

                        </div>
                        <button type="button" onClick={() => handleRemove(reserve.id)}>
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