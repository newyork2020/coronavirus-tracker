import React from "react"

import "./summary.scss"

const Summary = ({ summary = [] }) => {
  const data = summary.filter(
    ({ cases, deaths, asof }) => cases || deaths || asof
  )

  const reducedData = data.reduce((accum, curr) => {
    return { ...accum, ...curr }
  }, {})

  const { cases = "", deaths = "", asof = "" } = reducedData

  return (
    <>
      <div className="summary">
        <h3>
          Total positive cases: <span style={{ color: "red" }}>{cases}</span>
        </h3>
        <h3>
          Death: <span style={{ color: "red" }}>{deaths}</span>
        </h3>
        <h3>Updated {asof}</h3>
      </div>
    </>
  )
}

export default Summary
