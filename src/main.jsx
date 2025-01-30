import React from "react";
import ReactDOM from "react-dom/client"; // Use this for React 18
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Modern React 18 rendering
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/drone-website/">
    <App />
  </BrowserRouter>
);
