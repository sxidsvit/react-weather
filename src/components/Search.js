import React, { useState } from 'react'
import './Search.css'




function Search() {

  const [search, setSearch] = useState('')

  const submitHandler = event => {
    event.preventDefault()

    const { title } = search

    if (!title.trim()) {
      return this.props.showAlert('Название поста не может быть пустым')
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
