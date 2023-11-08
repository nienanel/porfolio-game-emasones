import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/**** Styles  ****/
import "./index.css";
import Background from "./background/Background";
/**** Components  ****/
import Nav from "./components/Nav";
import PlayerStats from "./components/PlayerStats";

/**** pages ****/
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>   
      <Nav />
      <Background />
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/skills" element={<Skills/>} />
      <Route exact path="/projects" element={<Projects/>} />
      <Route exact path="/contact" element={<Contact/>} />
    </Routes>
    <PlayerStats />
    </Router>
  );
};

export default App;
