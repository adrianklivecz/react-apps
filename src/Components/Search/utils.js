import React from "react";

const apiKey = "ce592bb2a38990347dc51ce2a0abfb1a";
const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

export const getCityWeather = (cityName, cityData) => {
  if (cityName) {
    fetch(`${baseUrl}?q=${cityName}&appid=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        cityData = data;
        console.log(data.name, data.weather);
      });
  }
};

export const defaultCityWeatherBerlin = () => {
  let cityData;
  fetch(`${baseUrl}?q=Berlin&appid=${apiKey}`)
    .then((res) => res.json())
    .then((data) => {
      cityData = data.weather[0].description;
    });
  return <h1>Berlin "{cityData}" </h1>;
};

export const defaultCityWeatherBarcelona = () => {
  let cityData;
  fetch(`${baseUrl}?q=Barcelona&appid=${apiKey}`)
    .then((res) => res.json())
    .then((data) => {
      cityData = data.weather[0].description;
    });
  return <h1>Barcelona "{cityData}" </h1>;
};
