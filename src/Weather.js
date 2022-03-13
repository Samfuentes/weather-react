import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [city, setCity] = useState(props.city);
  const [weather, setWeather] = useState({ ready: false });

  function handleResponse(response) {
    setCity(props.city);
    setWeather({
      ready: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      country: response.data.sys.country,
      icon: response.data.weather[0].icon,
      coord: response.data.coord,
    });
  }

  function search() {
    const apiKey = "a410057f698a69a787c08a64653ca0de";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-9">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                className="form-control"
                placeholder="Enter a city..."
                onChange={handleCityChange}
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
        <WeatherInfo data={weather} />
        <WeatherForecast coord={weather.coord} />
      </div>
    );
  } else {
    search();
    return <h1>Loading...</h1>;
  }
}
