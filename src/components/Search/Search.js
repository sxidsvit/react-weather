import React, { useState } from 'react'
import './Search.css'
import { BASEURL } from '../../utils/constants'
import fetchWeather from '../../utils/fetchWeather'

function Search({ currentWeather, setSurrentWeather }) {
  const [search, setSearch] = useState('')

  const submitHandler = event => {
    event.preventDefault()
    const сity = search.trim()
    if (сity) {
      const api = `${BASEURL}&q=${сity}`
      fetchWeather(api, setSurrentWeather)
      setSearch('')
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
      <button className="btn btn-color" type="submit"><i className="fa fa-question-circle"></i>&nbsp;Поиск</button>
    </form>

  )
}

export default Search
