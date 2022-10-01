import { useState } from "react";
import "./App.css";
import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
import About from "./components/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <About />
      <Portfolio />
    </div>
  );
}

export default App;
