import React from "react";
import FormatDate from "./FormatDate";

export default function WeatherInfo(props) {
  return (
    <di className="WeatherInfo">
      <h1 className="pt-5">
        {props.data.city},{props.data.country}
      </h1>{" "}
      <div className="pb-4">
        <FormatDate date={props.data.date} />
      </div>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col tempInfo">
            <img src={props.data.icon} alt="Weather Icon" />
            <span className="temperature">
              {Math.round(props.data.temperature)}°C{" "}
            </span>{" "}
          </div>
          <div className="col">
            <ul>
              {" "}
              <li className="text-capitalize">{props.data.description}</li>
              <li> Humidity: {props.data.humidity}%</li>
              <li> Wind: {props.data.wind}km/h </li>
            </ul>
          </div>
        </div>
      </div>
    </di>
  );
}
