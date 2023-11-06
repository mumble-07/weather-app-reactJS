import React from 'react';
import './WeatherApp.css';

import search_icon from '../Assets/search.png';
import clear_icon from '../Assets/clear.png';
import cloudy_icon from '../Assets/cloud.png';
import drizzle_icon from '../Assets/drizzle.png';
import humid_icon from '../Assets/humidity.png';
import rain_icon from '../Assets/rain.png';
import snow_icon from '../Assets/snow.png';
import wind_icon from '../Assets/wind.png';

export const WeatherApp = () => {

  let api_key = '612d22327ce57af3d51790d78063de0f';

  const search = async () => {
    const element = document.getElementsByClassName('cityInput');
    if (element[0].value === '') {
      return 0;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

    let response = await fetch(url);
    let data = await response.json();

    const humidity = document.getElementsByClassName('humidity-percent');
    const wind = document.getElementsByClassName('wind-rate');
    const temperature = document.getElementsByClassName('weather-temp');
    const location = document.getElementsByClassName('weather-location');

    humidity[0].innerHTML = data.main.humidity + '%';
    wind[0].innerHTML = data.wind.speed + 'km/h';
    temperature[0].innerHTML = data.main.temp + '&#176;C';
    location[0].innerHTML = data.name;


  }

  return (
    <div className='container'>
      <div className='top-bar'>
        <input type='text' className='cityInput' placeholder='Search' />
        <div className='search-icon' onClick={() => { search() }}>
          <img src={search_icon} alt='' />
        </div>
      </div>
      <div className='weather-image'>
        <img src={cloudy_icon} alt='' />
      </div>
      <div className="weather-temp">24&#176;C</div>
      <div className="weather-location">London</div>
      <div className="data-container">

        <div className="element">
          <img src={humid_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>

        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="wind-rate">18km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>

    </div>
  )
}
