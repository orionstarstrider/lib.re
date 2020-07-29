import { combineReducers } from 'redux'
import app from './app'
import books from './books'

export default combineReducers({
  app,
  books,
})
