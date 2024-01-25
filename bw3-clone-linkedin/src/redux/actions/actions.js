import { apiKey, usersListUrl } from '../config/Dati'

export const addUserProfile = (user) => {
    return (dispatch, getState) => {
        fetch(usersListUrl, {
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
}