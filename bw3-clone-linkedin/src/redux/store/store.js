import { bigReducers } from '../reducers/reducers'
import { applyMiddleware, createStore } from 'redux'
import { thunk } from 'redux-thunk'

const initialState = {
    user: [],
    experience: []
}

export const store = createStore(bigReducers, initialState, applyMiddleware(thunk))