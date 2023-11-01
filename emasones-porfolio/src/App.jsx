import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";

/**** Components  ****/
import Nav from "./components/Nav";

const App = () => {
  return (
    <Router>
    <main >
      <Nav />
    </main>
    </Router>
  );
};

export default App;
