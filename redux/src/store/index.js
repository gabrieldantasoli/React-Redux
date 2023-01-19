import { createStore , applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';

import RootReducers from './modules/RootReducers';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const enhancer = applyMiddleware(sagaMiddleware);

const store = createStore(RootReducers, enhancer);


sagaMiddleware.run(rootSaga)
export default store;