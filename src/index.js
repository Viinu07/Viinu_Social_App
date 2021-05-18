import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebaseContext from './config/firebase';
import { firebase, FieldValue } from './library/firebase';
import './styles/app.css';

ReactDOM.render(
  <firebaseContext.Provider value={{ firebase, FieldValue }}>
    <App />
  </firebaseContext.Provider>,
  document.getElementById('root')
);
