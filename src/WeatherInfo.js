import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="pt-5">
        {props.data.city},{props.data.country}
      </h1>{" "}
      <div className="pb-4">
        <FormatDate date={props.data.date} />
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-4 tempInfo align-self-center">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
          <div className="col-4 tempInfo align-self-center d-none d-md-block">
            <ul>
              {" "}
              <li className="text-capitalize">{props.data.description}</li>
              <li> Humidity: {props.data.humidity}%</li>
              <li> Wind: {props.data.wind}km/h </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
