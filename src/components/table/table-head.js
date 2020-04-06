import React from "react"

const TableHead = ({ fields = [] }) => {
  return (
    <thead>
      <tr>
        {fields.map(field => {
          const color = field === "positive" ? { color: "red" } : null

          return (
            <th scope="col" key={field} style={color}>
              {field}
            </th>
          )
        })}
      </tr>
    </thead>
  )
}

export default TableHead
