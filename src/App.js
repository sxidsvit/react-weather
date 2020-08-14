import React, { useEffect, useState } from 'react';
import { Container, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { bgcolor } from './utils/bgcolor'
import Search from './components/Search';
import { APIKEY, BASEURL } from './utils/constants'

function App() {

  const [currentWeather, setSurrentWeather] = useState(null)

  // application uses the user’s location to fetch the current weather
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition
        (position => {
          const { latitude: lat, longitude: lon } = position.coords
          const api = `${BASEURL}?lat=${lat}&lon=${lon}&units=metric&APPID=${APIKEY}&lang=ru`

          fetch(api)
            .then(response => response.json())
            .then(data => {
              if (data.cod === 200) {
                setSurrentWeather(data)
              } else {
                alert('No weather information for your city')
              }
            }).catch(e => {
              alert('No weather information for your city')
            })
        })

    } else {
      alert("Geolocation is not supported by this browser")
    }
  }, [])

  // Air temperature at a given time
  let currentTemp = currentWeather?.main?.temp

  return (
    <>
      <Search
        currentWeather={currentWeather}
        setSurrentWeather={setSurrentWeather}
      />
      <Container fluid
        className="justify-content-center align-items-center d-flex weather vw-100"
        style={{ backgroundColor: bgcolor(currentTemp) }}>
        {currentWeather && <Image
          className="image-icon"
          src={`http://openweathermap.org/img/wn/${currentWeather?.weather[0].icon}@2x.png`}
        />}
        {currentWeather?.name},&nbsp;
        {currentWeather?.weather[0].description},&nbsp;
        {currentWeather?.main.temp}C
    </Container>
    </>
  );
}

export default App;
