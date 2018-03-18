import { combineReducers } from 'redux'
import shares from './shares'

const shareApp = combineReducers({
  shares,
})

export default shareApp
