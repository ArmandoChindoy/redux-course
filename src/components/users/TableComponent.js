import React from 'react'
import { Link } from 'react-router-dom'

const TableComponent = ({ error, data }) => {
  const getRows = () =>
    data.map((element, key) => (
      <tr key={element.id}>
        <td>{element.name}</td>
        <td>{element.email}</td>
        <td>{element.website}</td>
        <td>
          <Link to={`/publications/${element.id}`}>
            <div className="eye-solid icon"></div>
          </Link>
        </td>
      </tr>
    ))

  return (
    <table className="tabla">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Enlace</th>
        </tr>
      </thead>
      {error ? <h1>Error:{error}</h1> : <tbody>{getRows()}</tbody>}
    </table>
  )
}

export default TableComponent
