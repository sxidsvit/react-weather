import React, { useEffect, useState } from 'react';
import { Container, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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

  return (
    <Container fluid className="justify-content-center align-items-center d-flex vh-100 vw-100">
      {currentWeather && <Image
        className="image-icon"
        src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`} rounded
      />}
    </Container>
  );
}

export default App;
