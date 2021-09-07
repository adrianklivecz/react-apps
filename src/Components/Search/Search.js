import { Button, Card, CardContent, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./Search.scss";

const apiKey = "e78bc120ac6a064bd6897a96e384f27a";
const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

export const Search = () => {
  const [cityName, setCityName] = useState("");
  const [clicked, setClicked] = useState(false);
  const [cityData, setCityData] = useState("");
  const [defaultFirstCityData, setDefaultFirstCityData] = useState("");
  const [defaultSecondCityData, setDefaultSecondCityData] = useState("");

  useEffect(() => {
    if (clicked) {
      fetch(`${baseUrl}?q=${cityName}&units=metric&appid=${apiKey}`)
        .then((res) => res.json())
        .then((data) => {
          setCityData(data);
          console.log(data);
          return data;
        });

      return () => {
        setClicked(false);
        setCityData("");
      };
    }
  }, [cityName, clicked]);

  useEffect(() => {
    fetch(`${baseUrl}?q=Barcelona&units=metric&appid=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        setDefaultFirstCityData(data);
        console.log(data);
        return data;
      });
  }, []);

  useEffect(() => {
    fetch(`${baseUrl}?q=Stockholm&units=metric&appid=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        setDefaultSecondCityData(data);
        console.log(data);
        return data;
      });
  }, []);

  return (
    <div className="main">
      <div className="search">
        <Card className="search__inputs">
          <CardContent className="inputs">
            <form noValidate autoComplete="off" className="inputs__form">
              <TextField
                className="input"
                id="filled-basic"
                label="City"
                // value=""
                variant="filled"
                onChange={(e) => setCityName(e.target.value)}
              />
              <TextField
                className="input"
                id="filled-basic"
                label="Country"
                variant="filled"
              />
            </form>
            <Button
              onClick={() => setClicked(true)}
              id="search-btn"
              variant="contained"
              color="secondary"
            >
              Search
            </Button>
          </CardContent>
          {cityData ? (
            <div className="inputs city-weather-data">
              <div className="city-weather-data__name info">
                {cityData.name}, {cityData.sys.country}{" "}
              </div>
              <div className="city-weather-data__info">
                <div>
                  <img
                    className="weather-icon"
                    src={`http://openweathermap.org/img/wn/${cityData.weather[0].icon}.png`}
                    alt=""
                  />
                </div>
                <div>
                  <span className="info">
                    {" "}
                    {Math.floor(cityData.main.temp)}&#8451;
                  </span>{" "}
                  <p>
                    feels like {Math.floor(cityData.main.feels_like)}&#8451;
                  </p>
                  <p>{cityData.weather[0].description}</p>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </Card>
        <div className="default-cities">
          <Card>
            <CardContent className="default-city">
              {" "}
              {defaultFirstCityData ? (
                <div className="inputs default-city-weather-data">
                  <div className="city-weather-data__name ">
                    {defaultFirstCityData.name},{" "}
                    {defaultFirstCityData.sys.country}{" "}
                  </div>
                  <div className="city-weather-data__info">
                    <div>
                      <img
                        className="weather-icon"
                        src={`http://openweathermap.org/img/wn/${defaultFirstCityData.weather[0].icon}.png`}
                        alt=""
                      />
                    </div>
                    <div>
                      <span>
                        {" "}
                        {Math.floor(defaultFirstCityData.main.temp)}&#8451;
                      </span>{" "}
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </CardContent>
          </Card>
          <Card>
            <CardContent className="default-city">
              {" "}
              {defaultSecondCityData ? (
                <div className="inputs default-city-weather-data">
                  <div className="city-weather-data__name">
                    {defaultSecondCityData.name},{" "}
                    {defaultSecondCityData.sys.country}{" "}
                  </div>
                  <div className="city-weather-data__info">
                    <div>
                      <img
                        className="weather-icon"
                        src={`http://openweathermap.org/img/wn/${defaultSecondCityData.weather[0].icon}.png`}
                        alt=""
                      />
                    </div>
                    <div>
                      <span>
                        {" "}
                        {Math.floor(defaultSecondCityData.main.temp)}&#8451;
                      </span>{" "}
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
