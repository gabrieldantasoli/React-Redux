import { createStore } from 'redux';

import RootReducers from './modules/RootReducers';

const store = createStore(RootReducers);

export default store;