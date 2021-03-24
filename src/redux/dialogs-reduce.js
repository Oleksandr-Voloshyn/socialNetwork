const SEND_MESSAGE = 'SET-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        newMessageText: '',
        message: [...state.message,
          {id: 4, message: action.newMessageText}]
      };


    default:
      return state;
  }

};


export const addMessageAction = (newMessageText) => ({type: SEND_MESSAGE, newMessageText});

export default dialogsReducer;
