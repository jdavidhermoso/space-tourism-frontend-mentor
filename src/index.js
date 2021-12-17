import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Destinations from "./pages/Destinations";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import Home from "./pages/Home";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="destinations" element={<Destinations/>}/>
        <Route path="crew" element={<Crew/>}/>
        <Route path="technology" element={<Technology/>}/>
        <Route
          path="*"
          element={
            <Navigate to="/"/>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
