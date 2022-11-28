import React from "react";
import { Routes, Route } from 'react-router-dom'
import AboutPage from './components/AboutPage'
import HomePage from './components/HomePage'
import CovidData from "./components/CovidData";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CovidData />
    </div>
  );
}

export default App;
