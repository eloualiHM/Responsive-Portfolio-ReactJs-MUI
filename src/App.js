import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbare from './components/Nvabare';
import Home from './components/Home'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Footer from "./components/Footer";
import ProjectInfo from "./components/ProjectInfo";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbare />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/project/:id' element={<ProjectInfo />} />
          <Route path='/experience' element={<Experience />} />
        </Routes>

      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
