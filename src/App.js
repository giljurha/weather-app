import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState } from 'react';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';

function App() {
  const [weather, setWeather] = useState(null);
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    })
  }

  const getWeatherByCurrentLocation = async(lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a58ba93b4908f9c534f17f4a32b54cc3&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
  }
  useEffect(() => {
    getCurrentLocation()
  }, [])

  return (
    <div>
      <div class="container">
        <WeatherBox weather={weather}/>
        <WeatherButton />
      </div>
    </div>
  );
}

export default App;
