import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherForecast.css";

import WeatherForecastDay from "./WeatherForecastDay";
import WeatherForecastHour from "./WeatherForecastHour";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  const [forecastHourly, setForecastHourly] = useState(null);
  const [forecastday, setforecastday] = useState(true);

  useEffect(() => {
    setLoaded(false);
  }, [props.coord]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setForecastHourly(response.data.hourly);
    setLoaded(true);
  }

  function changeForecastToday(event) {
    event.preventDefault();
    setforecastday(false);
  }

  function changeForecastWeek(event) {
    event.preventDefault();
    setforecastday(true);
  }

  if (loaded) {
    if (forecastday) {
      return (
        <div className="WeatherForecast d-none d-md-block">
          <div className="row p-3 mt-3 m-4">
            {forecast.map(function (dailyForecast, index) {
              if (index < 5) {
                return (
                  <div className="col" key={index}>
                    <WeatherForecastDay
                      data={dailyForecast}
                      forecast={forecastday}
                    />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
          <div>
            <span className="changeButtons">
              <strong>Week</strong> {""}|{""}
              <a href="#" onClick={changeForecastToday}>
                {""}Today
              </a>
            </span>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="row p-3 mt-3 m-4">
            {forecastHourly.map(function (hourlyForecast, index) {
              if (index < 5) {
                return (
                  <div className="col" key={index}>
                    <WeatherForecastHour data={hourlyForecast} />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
          <div>
            <span className="changeButtons">
              <a href="#" onClick={changeForecastWeek}>
                {""}Week
              </a>{" "}
              {""}|{""} <strong>Today </strong>
            </span>
          </div>
        </div>
      );
    }
  } else {
    let apiKey = "9df8d23caa734224f75f20a4db0aee86";
    let lon = props.coord.lon;
    let lat = props.coord.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
