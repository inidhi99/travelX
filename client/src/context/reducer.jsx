import { useReducer } from 'react';
import {
  UPDATE_POSTS,
  UPDATE_COMMENTS,
  UPDATE_REACTIONS
} from './actions'

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_POSTS:
      return {
        ...state,
        posts: [...action.posts]
      }
    case UPDATE_COMMENTS: 
      return {
        ...state,
        comments: [...action.comments]
      }
    case UPDATE_REACTIONS:
      return {
        ...state,
        reactions: [...action.reactions]
      }
    default:
      return state;
  }
}