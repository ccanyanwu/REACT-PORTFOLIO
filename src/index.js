import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider} from "./context";

import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css';
import App from './App';



ReactDOM.render(
  <React.StrictMode >
    <ThemeProvider>
      <App  />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);


