import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router} from "react-router-dom";

import { ThemeProvider} from "./context";

import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css';
import App from './App';



ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);


