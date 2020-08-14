import React, { useState } from 'react'
import './Search.css'
import { APIKEY, BASEURL } from '../utils/constants'

function Search({ currentWeather, setSurrentWeather }) {
  const [search, setSearch] = useState('')

  const submitHandler = event => {
    event.preventDefault()
    const сity = search.trim()
    if (сity) {
      const api = `${BASEURL}?q=${сity}&units=metric&APPID=${APIKEY}&lang=ru`

      fetch(api)
        .then(response => response.json())
        .then(data => {
          if (data.cod === 200) {
            setSurrentWeather(data)
          } else {
            alert('No weather information for your city')
          }
          setSearch('')
        }).catch(e => {
          alert('No weather information for your city')
        })

    } else {
      alert('Search field must not be empty')
    }
  }

  const changeInputHandler = event => {
    event.persist()
    setSearch(event.target.value)
  }

  return (
    <form onSubmit={submitHandler} className="body">

      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="q"
          name="q"
          value={search}
          onChange={changeInputHandler}
        />
      </div>
      <button className="btn btn-color" type="submit"><i className="fa fa-question-circle"></i>&nbsp;Search</button>
    </form>

  )
}

export default Search
