import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ParallaxProvider } from "react-scroll-parallax";
import ScrollObserver from "./utites/scroll-observer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ParallaxProvider>
      <ScrollObserver>
        <App />
      </ScrollObserver>
    </ParallaxProvider>
  </React.StrictMode>
);
