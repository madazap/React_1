import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route } from 'react-router-dom';
import Rutas from '../src/screens/rutas';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Rutas />
  </React.StrictMode>
);


