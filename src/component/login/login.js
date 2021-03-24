import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormControlor/FormsControler";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reduce";
import {Redirect} from "react-router-dom";
import style from "./../common/FormControlor/FormsControler.module.css"

const maxLength = maxLengthCreator(30)

const LoginForm = (handleSubmit, error) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
       <Field placeholder={"Email"} name={"email"} component={Input}
              validate={[required, maxLength]}
       />
      </div>
      <div>
        <Field placeholder={"Password"} name={"password"} component={Input} type="password"
               validate={[required, maxLength]}/>
      </div>
      <div>
        <Field type={"checkbox"} name={"rememberMe"} component={"input"} /> rememder me
      </div>
      {error && <div className={style.formSummaryError}>
        {error}
      </div>}
      <button> Login </button>
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (login, isAuth) => {
  const onSubmit = (formData) => {
    login(formData.email, formData.password, formData.rememberMe)
  }

  if (isAuth){
    return <Redirect to={"/profile"}/>
  }
  return <div>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit}/>
  </div>
};

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login}) (Login);
