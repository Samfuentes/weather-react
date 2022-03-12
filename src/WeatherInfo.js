import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";

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
        <div className="row d-flex justify-content-sm-center">
          <div className="col tempInfo">
            <WeatherIcon code={props.data.icon} />
          </div>
          <div className="col tempInfo">
            <span className="temperature align-items-center">
              {Math.round(props.data.temperature)}°C{" "}
            </span>{" "}
          </div>
          <div className="col align-items-center">
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
