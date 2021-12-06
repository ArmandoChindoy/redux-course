import axios from 'axios'
import { GET_POST_BY_ID, ERROR, LOADING } from '../types/postsTypes'
import { SET_USERS } from '../types/usuariosTypes'
export const getById = (id) => async (dispatch, getState) => {
  dispatch({
    type: LOADING
  })
  try {
    const { users } = getState().usersReducer
    const { posts } = getState().postsReducer

    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)

    const allPosts = [
      ...posts,
      data
    ]

    const userIndex = users.findIndex(user => user.id === parseInt(id))

    const currentUser = { ...users[userIndex] }

    const userUpdated = { ...currentUser, data }
    const usersUpdated = users.slice(0)
    usersUpdated[currentUser] = userUpdated
    dispatch({
      type: SET_USERS,
      payload: usersUpdated
    })
    dispatch({
      type: GET_POST_BY_ID,
      payload: allPosts
    })
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.message
    })
  }
}
