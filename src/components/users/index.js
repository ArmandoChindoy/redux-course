import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as usersActions from '../../actions/usersActions'
import LoaderComponent from '../LoaderComponent'

class Users extends Component {
  componentDidMount () {
    this.props.GET_ALL()
  }

    getRows = () => this.props.users.map((usuario) => (
      <tr key={usuario.id}>
        <td>
          {usuario.name}
        </td>
        <td>
          {usuario.email}
        </td>
        <td>
          {usuario.website}
        </td>
      </tr>
    ));

    createTable =() => (
      <table className='tabla'>
            <thead>
              <tr>
                <th>
                  Nombre
                </th>
                <th>
                  Correo
                </th>
                <th>
                  Enlace
                </th>
              </tr>
            </thead>
            {this.props.error
              ? <h1>Error:{this.props.error}</h1>
              : <tbody>
              {this.getRows()}
            </tbody>
            }
          </table>
    )

    render () {
      return (
        <div>
          {this.props.loading ? <LoaderComponent/> : this.createTable()}
        </div>
      )
    }
};

const mapStateToProps = (reducers) => {
  return reducers.userReducer
}

export default connect(mapStateToProps, usersActions)(Users)
