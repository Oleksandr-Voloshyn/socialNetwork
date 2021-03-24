import React, {Component} from 'react';
import './App.css';
import NavBar from "./component/Navbar/NavBar";
import {Route, withRouter} from "react-router-dom";
import Music from "./component/Music/Music";
import News from "./component/News/News";
import Settings from "./component/Settings/Settings";
import DialogsContainer from "./component/Dialogs/DialogsContainer";
import UsersContainer from "./component/Users/UsersContainer";
import ProfileContainer from "./component/Profile/ProfileContainer";
import HeaderContainer from "./component/Header/HeaderContainer";
import Login from "./component/login/login";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reduce";
import Preloader from "./component/common/Preloader/Preloader";


class App extends Component {
componentDidMount() {
 this.props.initializeApp();
}

  render () {
  if (!this.props.initialized) {
    return <Preloader/>
  }
    return (
      <div className='app-wrapper'>
        <HeaderContainer/>
        <NavBar/>
        <div className='app-wrapper-content'>
          <Route path='/profile/:userId?'
                 render={() => <ProfileContainer/>}/>
          <Route path='/dialogs'
                 render={() =><DialogsContainer/>}/>
          <Route path='/music' component={Music}/>

          <Route path='/settings' component={Settings}/>
          <Route path='/users' render={() => <UsersContainer/>}/>
          <Route path='/login' component={Login}/>
          <Route path='/news' component={News}/>

        </div>
      </div>


    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose (
  withRouter,
  connect (mapStateToProps,{initializeApp}))(App)



