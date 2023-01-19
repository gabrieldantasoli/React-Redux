import api from '../../../Services/api';
import { addReserveSuccess, updateAmount } from './actions';
import { select , call , put , all , takeLatest } from 'redux-saga/effects';

function* addToReserve({ id }) {
    const tripExists = yield select(state => state.reserva.find(trip => trip.id === id));

    // esse get n ta pegando o objeto stock devido a minha api de lixo (ACREDITO)
    const myStock = yield call(api.get, `/stock/${id}`);

    const stockAmount = myStock.data["stock"][Number(id)].amount;
    
    const currentStock = tripExists ? tripExists.amount : 0;

    const amount = currentStock + 1;

    if (amount > stockAmount){
        alert("Quantidade maxima disponivel atingida !");
        return;
    }

    if (tripExists) {
        yield put(updateAmount(id, amount));
    } else {
        // esse get n ta pegando o objeto trips devido a minha api de lixo (ACREDITO)
        const response = yield call(api.get, `/trips/${id}`);

        const data = {
            // por isso , tenho que pegar response.data["trips"][Number(id)]
            ...response.data["trips"][Number(id)],
            amount: 1,
        }

        yield put(addReserveSuccess(data))
    }
}

export default all([
    takeLatest('ADD_RESERVE_REQUEST', addToReserve)
])