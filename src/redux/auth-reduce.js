import {apiHeader} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false
}


const authReduser = (state = initialState, action) => {

  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state;
  }
};


export const setUserData = (userId, login, email, isAuth) => ({
  type: SET_USER_DATA,
  payload: {userId, login, email, isAuth}
})


export const meAuth = () => async (dispatch) => {
  let response = await apiHeader.authMe();

  if (response.data.resultCode === 0) {
    let {id, email, login} = response.data.data
    dispatch(setUserData(id, login, email, true));
  }
}

export const login = (email, password, rememberMe) => async (dispatch) => {

  let response = await apiHeader.login(email, password, rememberMe, true);
      if (response.data.resultCode === 0) {
        dispatch(setUserData())
      } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "some error";
        dispatch(stopSubmit("login", {_error: message}));
      }

};

export const logout = () => async (dispatch) => {
  let response = await apiHeader.logout();
      if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
      }
}

export default authReduser;
