import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router'
import * as postsActions from '../../actions/postsActions'
import * as usersActions from '../../actions/usersActions'

const { getById: getPostById } = postsActions
const { getAll: getAllUsers } = usersActions

const Posts = (props) => {
  const { id } = useParams()
  console.log('props', props)

  useEffect(() => {
    const fetchData = async () => {
      !props.users && await props.getAllUsers()
      await props.getPostById(id)
    }
    fetchData()
  }, [])

  console.log('props', props)
  return (
      <>
      {!props.postsReducer.posts
        ? <h1>Publicaciones</h1>
        : <div>
            <h1>Publicaciones de {props.usersReducer.users.find(user => user.id === parseInt(id)).name}</h1>
        </div>
      }
        </>
  )
}

const mapStateToProps = ({ postsReducer, usersReducer }) => ({ postsReducer, usersReducer })
const mapDispatchToProps = {
  getPostById,
  getAllUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
