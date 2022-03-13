import React, { useState } from "react";
import "./Weather.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span>
        <span className="temperature">{Math.round(props.celsius)}</span>{" "}
        <span class="units">
          °C{""}|{""}
          <a href="#" onClick={showFahrenheit}>
            {""}°F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span>
        <span className="temperature">{Math.round(fahrenheit)}</span>{" "}
        <span class="units">
          <a href="#" onClick={showCelsius}>
            °C{""}
          </a>
          {""}|{""}°F
        </span>
      </span>
    );
  }
}