import React from 'react'
import {addUserProfile, addExperienceList} from '../actions/actions'


export const bigReducers = (state = [], action) => {

    switch (action.type) {
      case 'ADD_USER':
        return [...state, action.payload]
        
       
    
      default:
        break;
    }
    
    return state
}
