import React, { useState, useEffect } from "react"
import axios from "axios"

import "./index.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Searchbar from "../components/search-bar"
import Summary from "../components/summary"
import Table from "../components/table"

const IndexPage = () => {
  const [storedData, updateStoredData] = useState([])
  const [cityData, updateCityData] = useState([])
  const [summaryData, updateSummaryData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const { data: resp } = await axios
        .get("https://pbqv1qw4wa.execute-api.us-east-1.amazonaws.com/prod/v1")
        .catch(e => console.log(e.message))

      const { data, summary } = resp

      // stored full data from api as reference
      updateStoredData(data)
      // data to pass through as state for search
      updateCityData(data)
      updateSummaryData(summary)
    }

    fetchData()
  }, [])

  const handleChange = e => {
    e.preventDefault()
    const inputZipcode = e.target.value

    // always filter from stored data then update filterd data stated in another reference
    const filterData = storedData.filter(({ zipcode }) =>
      zipcode.includes(inputZipcode)
    )

    updateCityData(filterData)
  }

  return (
    <Layout>
      <SEO title="Home" />
      <div className="coffee" style={{ textAlign: "center" }}>
        <a
          className="bmc-button"
          target="_blank"
          href="https://www.buymeacoffee.com/pkuttiya"
        >
          <img
            src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
            alt="Buy me a mask"
          />
          <span style={{ marginLeft: "15px", fontSize: "19px !important" }}>
            Buy me a mask
          </span>
        </a>
      </div>

      <Searchbar handleChange={handleChange} />
      <Summary summary={summaryData} />
      <Table data={cityData} summary={summaryData} />
    </Layout>
  )
}

export default IndexPage
