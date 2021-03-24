import {meAuth} from "./auth-reduce";


const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


let initialState = {
  initialized: false
}


const appReduser = (state = initialState, action) => {

  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      }

    default:
      return state;
  }
};


export const initializeSuccess = () => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => (dispatch) => {
let promise = dispatch(meAuth());
Promise.all([promise])
  .then(()=>{
  dispatch(initializeSuccess());
})


}


export default appReduser;
