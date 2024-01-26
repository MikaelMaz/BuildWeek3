import { applyMiddleware, createStore } from 'redux';
import { thunk }  from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { bigReducers } from '../reducers/reducers';

const initialState = {
    user: [],
    experience: []
};

const persistConfig = { key: "root", storage };
const persistedReducer = persistReducer(persistConfig, bigReducers);
export const store = createStore(persistedReducer, initialState, applyMiddleware(thunk));
export const persistor = persistStore(store);