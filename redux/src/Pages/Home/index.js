import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { addReserveRequest } from "../../store/modules/reserva/actions";

import api from "../../Services/api";
import './home.css';
import { MdFlightTakeoff } from 'react-icons/md';

export default () => {
    const dispatch = useDispatch();

    const [stock , setStock] = useState([]);
    const [trips , setTrips] = useState([]);
    const numbers = [1, 2, 3, 4, 5];

    useEffect(() => {
        async function loadInfo() {
            const response = await api.get('');
            let trips = [];
            let stock = [];
            response.data['trips'].map((doc) => {
                trips.push({"id": doc.id, "title": doc.title, "Viagem": doc.Viagem, "image": doc.image,"status": doc.status});
            })
            response.data['stock'].map((doc) => {
                stock.push({"id": doc.id, "amount": doc.amount});
            })
            setTrips(trips);
            setStock(stock);
        }

        loadInfo();
    })

    function handleAdd(id) {
       dispatch(addReserveRequest(id));
    }

    return(
        <div>
            <div className="box">
                {trips.map((trip) => {
                    return(
                       <li key={trip.id}>
                        <img src={trip.image} alt={trip.title} />
                        <strong>{trip.title}</strong>
                        <span>Status : {trip.status === true ? "Disponível" : "Indeisponível"}</span>
                        <button type="button" onClick={() => handleAdd(trip.id)}>
                            <div><MdFlightTakeoff /></div>
                            <span>SOLICITAR RESERVA</span>
                        </button>
                    </li> 
                    )
                })}
            </div>
        </div>
    )
}