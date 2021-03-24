import {apiProfile} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_CHANGE = 'UPDATE-POST-CHANGE';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
  post: [
    {id: 1, message: 'How are you', like: 22},
    {id: 2, message: 'How are you', like: 12},
    {id: 3, message: 'How are you', like: 2},
    {id: 4, message: 'Fine, goodbay', like: 10}],
  profile: null,
  status: ''
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST: {

      let posst = {
        id: 5,
        message: action.post,
        like: 2
      };

      return {
        ...state,
        post: [...state.post, posst]
      }
    }

    case UPDATE_POST_CHANGE: {
      return {
        ...state,
        newPostText: action.newText
      }
    }

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      }
    }


    default:
      return state;
  }

};

export const addPostAction = (post) => ({type: ADD_POST, post});
export const updataPostChangeAction = (text) => ({type: UPDATE_POST_CHANGE, newText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});


export const idProfile = (userId) => async (dispatch) => {
  let response = await apiProfile.profileId(userId);
  dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
  let response = await apiProfile.getStatus(userId);
  dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
  let response = await apiProfile.updateStatus(status)
  console.log(response.data)
  dispatch(setStatus(status));
}

export default profileReducer;
