import { apiKey, usersListUrl, experiencesListUrl, userProfileUrl } from '../../config/Dati'
/*import axios from 'axios'*/

export const addUserProfile = (user) => {
    return (dispatch, getState) => {
      fetch(userProfileUrl, {
            headers: {
              Authorization: 'Bearer ' + apiKey
            }
          })
            .then(resp => resp.json())
            .then(json => {
             //console.log(json)
             return dispatch({ type: 'ADD_USER', payload: json })
            })
            .catch(err => console.error(err)) 
    }
}

export const UserExperience = (UserID) => {
  return (dispatch) =>
  {
    fetch((experiencesListUrl +UserID+'/experiences'), {
      headers: {
        Authorization: 'Bearer ' + apiKey
      }
    }).then(response => response.json())
    .then(json =>{
      //console.log(json)
      return dispatch({ type: 'USER_EXPERIENCE', payload: json })
    })
  }
}

export const addExperience = (experience, UserID) => {
  return (dispatch) => {
    fetch((experiencesListUrl + UserID + '/experiences'), {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + apiKey,
        'Content-Type': 'application/json' // Aggiunto il tipo di contenuto per assicurare una corretta interpretazione da parte del server
      },
      body: JSON.stringify({
          "role": experience.role,
          "company": experience.company,
          "startDate": experience.startDate,
          "endDate": experience.endDate, // could be null
          "description": experience.description,
          "area": experience.area
          // experience
      })
    })
    .then(response => {
      //console.log('Response status:', response.status);
      return response.json()
    })
    .then(json => {
      //console.log('Response JSON:', json);
      return dispatch({ type: 'ADD_EXPERIENCE', payload: json })
    })
    .catch(err => console.error(err));
    /*console.log(experience)*/
  };
};

export const deleteExperience = (UserID, ExpId) => {
  return(dispatch) => {
    fetch((experiencesListUrl + UserID + '/experiences/' + ExpId), {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + apiKey,
        'Content-Type': 'application/json' // Aggiunto il tipo di contenuto per assicurare una corretta interpretazione da parte del server
      }
    })
    .then(json => {
      return dispatch({ type: 'DELETE_EXPERIENCE', payload: ExpId })
    })
    .catch(err => console.error(err));
  }
}

export const changeExperience = (experience, UserID, ExpId) => {
  return(dispatch) => {
    fetch((experiencesListUrl + UserID + '/experiences/' + ExpId), {
      method: 'PUT',
      headers: {
        Authorization: 'Bearer ' + apiKey,
        'Content-Type': 'application/json' // Aggiunto il tipo di contenuto per assicurare una corretta interpretazione da parte del server
      },
      body: JSON.stringify({
          "role": experience.role,
          "company": experience.company,
          "startDate": experience.startDate,
          "endDate": experience.endDate, // could be null
          "description": experience.description,
          "area": experience.area
          // experience
      })
    })
    .then(json => {
      //return dispatch({ type: 'CHANGE_EXPERIENCE', payload: experience })
      console.log(json)
    })
    .catch(err => console.error(err));
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


// IMMAGINI

export const setImgProfile = (imageUrl) => {
  return(dispatch) => {
    fetch((usersListUrl), {
      method: 'PUT',
      headers: {
        Authorization: 'Bearer ' + apiKey,
        'Content-Type': 'application/json' // Aggiunto il tipo di contenuto per assicurare una corretta interpretazione da parte del server
      },
      body: JSON.stringify({"image":imageUrl})
    })
    .then(json => {
      console.log(json)
      return ({type: 'SET_IMAGE_PROFILE', payload: imageUrl})
    })
    .catch(err => console.error(err));
  }
}
  