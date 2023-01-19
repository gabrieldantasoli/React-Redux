import './App.css';
import Rotas from './Routes/AppRoutes';

import Header from './Components/Header';

import { Provider } from 'react-redux'
import Store from './store'

export default function App() {
  return (
    <div>
      <Provider store={Store}>
        <Header />
        <Rotas />
      </Provider>
      
    </div>
    
  );
}