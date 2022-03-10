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
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&unit=metrics`;
  axios.get(apiUrl).then(handleResponse);

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
      <h1 className="pt-5 pb-4">City, Country</h1>{" "}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <div>{Math.round(weather.temperature)}°C </div>
            <img src={weather.icon} alt="Weather Icon" />
          </div>
          <div className="col-6">
            <ul>
              {" "}
              <li> Description: {weather.description} </li>
              <li> Humidity: {weather.humidity}%</li>
              <li> Wind: {weather.wind}km/h </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
