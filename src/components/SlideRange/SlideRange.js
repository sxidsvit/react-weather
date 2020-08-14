import React, { useState } from 'react'
import './SlideRange.css'

function SlideRange({ style, currentWeather, setSurrentWeather }) {
  const [temp, setTemp] = useState(0)

  const changeTempHandler = event => {
    event.persist()
    const temperatureDegree = event.target.value
    setTemp(temperatureDegree)
    currentWeather.main.temp = temperatureDegree
    setSurrentWeather(prevState => ({ ...prevState, [prevState.main.temp]: temperatureDegree }
    ))
  }

  return (
    <div className="slide-range" style={style}>
      <label className="text-center d-block" htmlFor="customRange">Adjust temperature & background color</label>
      <input type="range"
        className="custom-range"
        min="-50"
        max="50"
        step="1"
        value={temp}
        id="customRange"
        onChange={changeTempHandler}
      />
    </div>
  )
}

export default SlideRange
