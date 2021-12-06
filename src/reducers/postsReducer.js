import { GET_POST_BY_ID, ERROR, LOADING } from '../types/postsTypes'

const INITIAL_STATE = {
  posts: [],
  loading: false,
  error: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_POST_BY_ID:
      return { ...state, posts: action.payload, loading: false }
    case ERROR:
      return { ...state, error: action.payload, loading: false }
    case LOADING:
      return { ...state, loading: true }
    default:return state
  }
}
