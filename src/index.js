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

    <BrowserRouter>
      <HeaderBar/>
      <div className="content__container">
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="destinations" element={<Destinations/>}/>
          <Route path="crew" element={<Crew/>}/>
          <Route path="technology" element={<Technology/>}/>
          <Route
            path="*"
            element={
              <Navigate to="/home"/>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
