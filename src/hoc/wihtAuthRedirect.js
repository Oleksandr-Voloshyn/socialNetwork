import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
};


export const wihtAuthRedirect = (Component) => {

  class RedirectComponent extends React.Component {
    render() {
      if (this.props.isAuth === false) return <Redirect to={'/login'}/>
      return <Component {... this.props}/>
    }
  }

  let ConnectedAuthRedirectComponen = connect(mapStateToProps)(RedirectComponent)
  return ConnectedAuthRedirectComponen;
}
