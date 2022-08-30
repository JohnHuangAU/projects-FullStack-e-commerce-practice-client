import { applyMiddleware, compose } from 'redux'
import {configureStore} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const initialState = {}
const middleware = [thunk]

let store
try {
  store = configureStore(
    {reducer: rootReducer}, 
    initialState, 
    compose(applyMiddleware(...middleware))) 
} catch (error) {
  store = configureStore(
    {reducer: rootReducer}, 
    initialState, 
    compose(applyMiddleware(...middleware))) 
}

export default store
