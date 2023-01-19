import { all } from "redux-saga/effects";

import reserva from "./reserva/sagas";

export default function* rootSaga() {
    return yield all([
        reserva
    ])
}