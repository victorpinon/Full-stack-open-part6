// import { createStore, combineReducers } from 'redux'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducers/anecdoteReducer'

// const reducer = combineReducers({
//   notes: noteReducer,
//   filter: filterReducer
// })

const store = createStore(
  reducer,
  composeWithDevTools()
)

export default store