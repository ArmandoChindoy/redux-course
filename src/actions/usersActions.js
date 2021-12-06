import axios from 'axios'
import { GET_ALL_USERS, ERROR, LOADING } from '../types/usuariosTypes'
export const getAll = () => async (dispatch) => {
  dispatch({ type: LOADING })
  try {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    dispatch({
      type: GET_ALL_USERS,
      payload: data
    })
  } catch (error) {
    console.log(error.message)
    dispatch({
      type: ERROR,
      payload: error.message
    })
  }
}
