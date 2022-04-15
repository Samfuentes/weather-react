import React from "react";
import Weather from "./Weather.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather city="vancouver" />
        <footer>
          This proyect was code by{" "}
          <a href="https://www.samfuentesg.com/">Sam Fuentes</a>,{""} and is{" "}
          {""}
          <a
            href="https://github.com/Samfuentes/weather-react"
            target="_blank"
            id="open-source-link"
          >
            open-source on GitHub.
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
