import { GET_ALL_USERS, SET_USERS, ERROR, LOADING } from '../types/usuariosTypes'

const INITIAL_STATE = {
  users: [],
  loading: false,
  error: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return { ...state, users: action.payload, loading: false }
    case SET_USERS:
      return { ...state, users: action.payload, loading: false }
    case ERROR:
      return { ...state, error: action.payload, loading: false }
    case LOADING:
      return { ...state, loading: true }
    default:return state
  }
}
