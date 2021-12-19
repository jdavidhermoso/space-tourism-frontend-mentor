import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Destinations from "./pages/Destinations";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import Home from "./pages/Home";
import HeaderBar from "./components/HeaderBar/HeaderBar";

ReactDOM.render(
  <React.StrictMode>
    <HeaderBar/>
    <div className="content__container">
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
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
