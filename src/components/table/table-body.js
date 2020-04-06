import React from "react"

const TableBody = ({ data = [] }) => {
  return (
    <tbody>
      {data &&
        data.map(
          ({
            zipcode,
            city,
            county_name: county,
            population,
            total_test,
            positive,
          }) => (
            <tr key={zipcode}>
              <td data-label="zipcode">{zipcode}</td>
              <td data-label="city">{city}</td>
              <td data-label="county">{county}</td>
              <td data-label="population">{population}</td>
              <td data-label="total test">{total_test}</td>
              <td data-label="positive" style={{ color: "red" }}>
                {positive}
              </td>
            </tr>
          )
        )}
    </tbody>
  )
}

export default TableBody
