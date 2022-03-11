import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'flowbite';

import Dashboard from 'views/Dashboard';
import { UserProvider } from "contexts/AuthContext";


ReactDOM.render(

  <BrowserRouter>
  <UserProvider>
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById("root")
);


