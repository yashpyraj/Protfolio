import React, { useState, useCallback, useEffect, useContext } from "react";
import "./App.css";
import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
import { ScrollContext } from "./utites/scroll-observer";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Header />
      {/* <About /> */}
      <Portfolio />
      <Projects />
    </div>
  );
}

export default App;
