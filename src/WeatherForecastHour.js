import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastHour(props) {
  function Temperature() {
    let temperature = Math.round(props.data.temp);
    return `${temperature}°`;
  }

  function formateHour() {
    let date = new Date(props.data.dt * 1000);
    let hour = date.getHours();
    let time = `${hour}:00`;
    return time;
  }

  return (
    <div>
      <div className="WeatherForecast-day">{formateHour()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="WeatherForecast-temperatures">{Temperature()}</div>
    </div>
  );
}
