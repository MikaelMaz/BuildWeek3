
export default function homepageReducer(state=[], action) {
    switch(action.type){
        case 'GET_POST_LIST':
            return action.payload
        default:
          break
    }
  return state
}
