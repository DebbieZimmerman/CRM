import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'mobx-react'
import reportWebVitals from './reportWebVitals';
import { ClientStore } from './Stores/ClientStore';
import { GeneralStore } from './Stores/GeneralStore'

//use effect when app opened will call function in store, and can save that data inside the store

const clientStore = new ClientStore()
const generalStore = new GeneralStore()

const stores = {clientStore, generalStore}

ReactDOM.render(
  <Provider {...stores} >
    <App />
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();
