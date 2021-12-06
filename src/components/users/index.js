import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as usersActions from '../../actions/usersActions'
import LoaderComponent from '../LoaderComponent'
import TableComponent from './TableComponent'

class Users extends Component {
  componentDidMount () {
    !this.props.users || this.props.users.length < 1 && this.props.getAll()
  }

    createTable =() => (
      <TableComponent error={this.props.error} data= {this.props.users}/>
    )

    render () {
      console.log('props', this.props)
      return (
        <div>
          {this.props.loading || this.props.users.length < 1 ? <LoaderComponent/> : this.createTable()}
        </div>
      )
    }
};

const mapStateToProps = (reducers) => {
  return reducers.usersReducer
}

export default connect(mapStateToProps, usersActions)(Users)
