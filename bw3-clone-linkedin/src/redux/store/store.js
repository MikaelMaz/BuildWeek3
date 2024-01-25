import { createStore } from 'react-redux'
import { bigReducers } from '../reducers/reducers'
import { applyMiddleware } from 'redux'

const initialState = {
    userList: []
}

export const store = createStore(bigReducers, initialState, applyMiddleware(thunk))