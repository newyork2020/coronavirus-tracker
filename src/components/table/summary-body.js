import React from "react"

const SummaryBody = ({ summary = [] }) => {
  return (
    <tbody>
      <tr>
        {summary.map(({ borough, positive }, i) => (
          <td key={i} data-label={borough}>
            <span style={{ color: "red" }}>{positive}</span>
          </td>
        ))}
      </tr>
    </tbody>
  )
}

export default SummaryBody
