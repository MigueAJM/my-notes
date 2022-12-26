import React from 'react'
import ReactDOM from 'react-dom/client'
import './resources/css/variables.css'
import './resources/css/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Dashboard } from './pages/dashboard'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Dashboard/>
  </React.StrictMode>
);
