import React from 'react';
import "./Weather.css";
import { useState, useEffect } from 'react';




const Weather = () => {

    const apiWeatherKey = "b6b0db8adf7630572f68f9387019bd06";
    const [weatherData, setWeatherData] = useState([{}]);
    const [city, setCity] = useState("");
  
    const getWeather = (event) => {
      if (event.key == "Enter") {
        fetch(`api.openweathermap.org/data/2.5/weather?id=${city}&appid=${apiWeatherKey}`).then(
          response => response.json()
        ).then(
          data => {
            setWeatherData(data);
          }
        )
  
      }
    }

  return <div>
      <div className = "weather-container">
            <input className = "input-city" placeholder = "Ingrese el nombre de la ciudad:" onChange={e => setCity(e.target.value)} value={city} onKeyPress={getWeather}/>

            {typeof weatherData.main === "undefined" ? (
                <div>
                    <h2>Desea saber el clima de hoy?</h2>
                </div>
            ) : (
                <div className = "weather-data">
                    <h3 className = "city">{weatherData.name}</h3>
                    <h3 className = "temp">{Math.round(weatherData.main.temp)}°C</h3>
                    <h3 className = "weather">{weatherData.weather[0].main}</h3>
                </div>
            )}

            {weatherData.cod === "404" ? (
                <h2>La ciudad no fue encontrada</h2>
            ) : (
                <></>
            )}

      </div>
  </div>;
};

export default Weather;
