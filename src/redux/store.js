import profileReducer from "./profile-reduce";
import dialogsReducer from "./dialogs-reduce";

let store = {
  _state: {
    profilePage: {
      post: [
        {id: 1, message: 'How are you', like: 22},
        {id: 2, message: 'How are you', like: 12},
        {id: 3, message: 'How are you', like: 2},
        {id: 4, message: 'Fine, goodbay', like: 10}],
      newPostText: 'Sasha Voloshyn'
    },
    messagePage: {
      dialog: [{id: 1, name: 'Sasha'},
        {id: 2, name: 'Solomia'},
        {id: 3, name: 'Slavik'},
        {id: 4, name: 'Petro'},
        {id: 5, name: 'Ivan'},
        {id: 6, name: 'Masha'}],

      message: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Yo'}],
      newMessageText: 'New Text'
    },
    navbar: {
      friends: [
        {id: 1, name: 'Sasha'},
        {id: 2, name: 'Solomia'},
        {id: 3, name: 'Slavik'}
      ]
    }

  },

  _callSubscriber() {
    console.log('Hello');
  },

  getState() {
    return this._state;
  },

  subscribe(obsarevable) {
    this._callSubscriber = obsarevable;
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.messagePage = dialogsReducer(this._state.messagePage, action)

    this._callSubscriber(this._state);

  }
};







export default store;
window.store = store;
