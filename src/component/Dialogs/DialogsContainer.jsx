import React from "react";

import {addMessageAction, updataMessageChange} from "../../redux/dialogs-reduce";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {wihtAuthRedirect} from "../../hoc/wihtAuthRedirect";
import {compose} from "redux";



let mapStateToProps = (state) => {
  return {
    dialogsPage: state.messagePage,
  }
};
let mapDispatchToProps = (dispatch) => {

  return {
    addMessageAction: (messageText) => {
      dispatch(addMessageAction(messageText));
    }


  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  wihtAuthRedirect
)
(Dialogs)


