import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <About />
    </div>
  );
}

export default App;
