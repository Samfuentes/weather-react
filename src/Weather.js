import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormatDate from "./FormatDate.js";

export default function Weather(props) {
  const [city, setCity] = useState(" ");
  const [weather, setWeather] = useState({ ready: false });

  function handleResponse(response) {
    setCity(props.city);
    setWeather({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
    });
  }
  if (weather.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-9">
            <form>
              <input
                type="search"
                className="form-control"
                placeholder="Enter a city..."
              />
            </form>
          </div>
          <div className="col-1">
            <input
              type="button"
              value="Search"
              className="btn btn-outline-light"
            ></input>
          </div>
        </div>
        <h1 className="pt-5">City, Country</h1>{" "}
        <p className="text-capitalize">{weather.description} </p>
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col tempInfo">
              <img src={weather.icon} alt="Weather Icon" />
              <span className="temperature">
                {Math.round(weather.temperature)}°C{" "}
              </span>{" "}
            </div>
            <div className="col">
              <ul>
                {" "}
                <li>
                  <FormatDate date={weather.date} />{" "}
                </li>
                <li> Humidity: {weather.humidity}%</li>
                <li> Wind: {weather.wind}km/h </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "a410057f698a69a787c08a64653ca0de";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return <h1>Loading...</h1>;
  }
}
