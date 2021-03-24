import {apiUsers} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNTER = 'SET_TOTAL_USERS_COUNTER';
const TOGGEL_IS_FETCHING = 'TOGGEL_IS_FETCHING';
const TOGGEL_IS_FOLLOWING_PROGRES = 'TOGGEL_IS_FOLLOWING_PROGRES'

let initialState = {
  users: [],
  pageSize: 6,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: []

}


const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u;
        })
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u;
        }),
      };

    case SET_USERS: {
      return {...state, users: action.users}
    }
    case SET_CURRENT_PAGE: {
      return {...state, currentPage: action.currentPage}
    }
    case SET_TOTAL_USERS_COUNTER: {
      return {...state, totalUsersCount: action.count}
    }
    case TOGGEL_IS_FETCHING: {
      return {...state, isFetching: action.isFetching}
    }
    case TOGGEL_IS_FOLLOWING_PROGRES: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      }
    }

    default:
      return state;
  }

};

export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (usersCount) => ({type: SET_TOTAL_USERS_COUNTER, count: usersCount})
export const setIsFetching = (isFetching) => ({type: TOGGEL_IS_FETCHING, isFetching})
export const toggelFollowingProgres = (isFetching, userId) => ({type: TOGGEL_IS_FOLLOWING_PROGRES, isFetching, userId})


export const getUsersThunkCreater = (currentPage, pageSize) => async (dispatch) => {
  dispatch(setIsFetching(true));
  let data = await apiUsers.getUsers(currentPage, pageSize)
  dispatch(setIsFetching(false));
  dispatch(setUsers(data.items));
  console.log(data);
  dispatch(setTotalUsersCount(data.totalCount));
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(toggelFollowingProgres(true, userId));
  let data = await apiMethod(userId);
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggelFollowingProgres(false,userId));
}

export const follow = (userId) => async (dispatch) => {
  let apiMethod =  apiUsers.postUsers.bind(apiUsers)
  let actionCreator = followSuccess;
  followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)
}


export const unfollow = (userId) => {
  return async (dispatch) => {
    let apiMethod = apiUsers.deleteUsers.bind(apiUsers)
    let actionCreator = unfollowSuccess;
    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)
  }
}


export default usersReducer;
