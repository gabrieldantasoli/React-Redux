import React, { useEffect, useState } from "react";

import api from "../../Services/api";

export default () => {

    const [stock , setStock] = useState([]);
    const [trips , setTrips] = useState([]);

    useEffect(() => {
        async function loadInfo() {
            const response = await api.get('');
            setStock(JSON.stringify(response.data["stock"]));
            setTrips(JSON.stringify(response.data["trips"]));
            response.data["trips"].map((r) => {
                console.log(r);
            })
        }

        loadInfo();
    })

    return(
        <div>
            <div className="box">
                {trips}
            </div>
        </div>
    )
}