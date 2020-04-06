import React from "react"

import "./table.scss"

import TableHead from "./table-head"
import TableBody from "./table-body"
import SummaryBody from "./summary-body"

const Table = ({ data, summary = [] }) => {
  const boroughFields = [
    "Bronx",
    "Brooklyn",
    "Manhattan",
    "Queens",
    "Staten Island",
  ]

  const summaryData = summary.filter(
    ({ borough, positive }) =>
      borough && borough.toLowerCase() !== "citywide" && positive
  )

  const cityFields = [
    "zipcode",
    "city",
    "county",
    "population",
    "total test",
    "positive",
  ]

  return (
    <>
      <table>
        <TableHead fields={boroughFields} />
        <SummaryBody summary={summaryData} />
      </table>
      <table className="city-info">
        <TableHead fields={cityFields} />
        <TableBody data={data} />
      </table>
    </>
  )
}

export default Table
