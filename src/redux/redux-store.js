import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reduce";
import dialogsReducer from "./dialogs-reduce";
import usersReducer from "./users-reduce";
import authReduser from "./auth-reduce";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form';
import appReduser from "./app-reduce";

let reduсers = combineReducers({
  profilePage: profileReducer,
  messagePage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReduser,
  form: formReducer,
  app: appReduser
})


let store = createStore(reduсers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;
