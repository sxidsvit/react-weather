import React, { useEffect, useState } from 'react';
import { Container, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { bgcolor } from './utils/bgcolor'
import Search from './components/Search';

function App() {

  const [currentWeather, setSurrentWeather] = useState(null)

  // application uses the user’s location to fetch the current weather
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition
        (position => {
          const { latitude: lat, longitude: lon } = position.coords
          const apiKey = "72224e5b355d67283e0e9084d6bc395d"
          const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=${apiKey}&lang=ru`

          fetch(api)
            .then(response => response.json())
            .then(data => {
              setSurrentWeather(data)
            })
        })

    } else {
      alert("Geolocation is not supported by this browser")
    }
  }, [])

  console.log('currentWeather: ', currentWeather)

  let currentTemp = currentWeather?.main.temp

  return (
    <>
      <Search />
      <Container fluid
        className="justify-content-center align-items-center d-flex weather vw-100"
        style={{ backgroundColor: bgcolor(currentTemp) }}>
        {currentWeather && <Image
          className="image-icon"
          src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
        />}
        {currentWeather?.main.temp}C
    </Container>
    </>
  );
}

export default App;
