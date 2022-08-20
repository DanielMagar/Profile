import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <div className="main">
      <Home />
      <Routes>{/* <Route path="" element={}/> */}</Routes>
    </div>
  );
};

export default Main;
