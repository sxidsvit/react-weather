import React, { useEffect, useState } from 'react';

function App() {

  const [currentWeather, setSurrentWeather] = useState(null)

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
    <div className="wrapper">
    </div>
  );
}

export default App;
