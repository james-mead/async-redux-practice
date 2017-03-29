import {combineReducers} from 'redux'

import subreddits from './subreddits'
import urbandictionary from './urbandictionary'

export default combineReducers({
  subreddits,
  urbandictionary
})
