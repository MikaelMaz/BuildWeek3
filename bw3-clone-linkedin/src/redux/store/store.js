import { applyMiddleware, combineReducers, createStore } from 'redux';
import { thunk }  from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { profileReducer } from '../reducers/profileReducer';
import homepageReducer from '../reducers/homepageReducer';

const initialState = {
    profile:{
        user: [],
         imageProfile: [],
         experience: [] 
     },
    homepage: []
};

const bigReducer = combineReducers({
   profile: profileReducer,
    homepage: homepageReducer
    
})

const persistConfig = { key: "root", storage };
const persistedReducer = persistReducer(persistConfig, bigReducer);
export const store = createStore(persistedReducer, initialState, applyMiddleware(thunk));
export const persistor = persistStore(store);