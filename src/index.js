import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Dashboard from 'views/Dashboard';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);


