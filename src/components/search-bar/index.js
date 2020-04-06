import React from "react"
import "./search-bar.scss"

const Searchbar = ({ handleChange }) => {
  return (
    <>
      <div>
        <form className="search-container" onSubmit={e => e.preventDefault()}>
          <input
            onChange={handleChange}
            type="text"
            id="search-bar"
            placeholder="search nyc zipcode"
          />
        </form>
      </div>
    </>
  )
}

export default Searchbar
