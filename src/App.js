import React from "react";
import Weather from "./Weather.js";
import "./App.css";

function App() {
  return (
    <div className="container App">
      <form id="search-form" class="form">
        <input
          type="text"
          class="form-control"
          autocomplete="off"
          id="search-input"
          placeholder="Search another city..."
        />
      </form>
      <Weather city="Vancouver" />
      <footer>
        Coded by Sam Fuentes,
        <a
          href="https://github.com/Samfuentes/weather-react"
          target="_blank"
          id="open-source-link"
        >
          open-source on github.
        </a>
      </footer>
    </div>
  );
}

export default App;
