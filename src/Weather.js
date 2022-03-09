import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(" ");
  const [weather, setWeather] = useState({});

  function handleResponse(response) {
    setCity(props.city);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.main.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  let apiKey = "226ed7484bfdb5ee56b0b7f78f0f94e0";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units='metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div>
      {" "}
      <h1>{city}</h1>{" "}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <ul>
              {" "}
              <li> Temerature : {Math.round(weather.temperature)}°C </li>
              <li> Description : {weather.description} </li>
              <li> Humidity: {weather.humidity}%</li>
              <li> Wind: {weather.wind}km/h </li>
            </ul>
          </div>
          <div className="col-6">
            <img src={weather.icon} alt="Weather Icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
