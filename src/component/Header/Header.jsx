import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
    <img src='https://www.seoclerks.com/files/user/community/000/611/853/33b869f90619e81763dbf1fccc896d8d--lion-logo-modern-logo.1502284659.jpg'/>
    <div className={s.login}>
      {props.isAuth ? <div>props.login - <button onClick={props.logout}> log out</button></div>
        :<NavLink to={'/login'}> Login </NavLink> }
    </div>

  </header>);
}

export default Header;
