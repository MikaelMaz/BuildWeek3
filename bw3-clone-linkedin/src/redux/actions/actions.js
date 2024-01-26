import { apiKey, usersListUrl, experiencesListUrl, userProfileUrl } from '../../config/Dati'
import axios from 'axios'

export const addUserProfile = (user) => {
    return (dispatch, getState) => {
      fetch(userProfileUrl, {
            headers: {
              Authorization: 'Bearer ' + apiKey
            }
          })
            .then(resp => resp.json())
            .then(json => {
             console.log(json)
             return dispatch({ type: 'ADD_USER', payload: json })
            })
            .catch(err => console.error(err)) 
    }
}

/* export const addExperienceList = (user) => {
  return (dispatch, getState) => {
      fetch(experiencesListUrl, {
          headers: {
            Authorization: 'Bearer ' + apiKey
          }
        })
          .then(resp => resp.json())
          .then(json => {
          //   console.log(json)
            if(response.ok) {
              return dispatch({ type: 'ADD_USER', payload: json })
            }
          })
          .catch(err => console.error(err))
  }
} */