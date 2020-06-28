import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {onUserPasswordChange, onUserEmailChange, onUserDataCheck} from './../../redux/reducers/auth-reducer';

const LoginPage = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onUserDataCheck(email, password)
  }
  const {email, password, isAuthorized, onUserEmailChange, onUserPasswordChange, onUserDataCheck} = props
  return (
    isAuthorized 
      ? <Redirect from="/login" to="/posts"/>
      : <div className={"container"}>
      <div className={"row justify-content-md-center"}>
        <div className={"col col-12 col-md-6"}>
          <form className={"m-5"} onSubmit={handleSubmit}>
            <div className={"form-group"}>
                <label className={"mt-3"} for="login">
                  Login (testuser)
                </label>
                <input className={"form-control"} defaultValue={email} id="login" name="email" type="text" onChange={e => onUserEmailChange(e.target.value)}/>
                <label className={"mt-3"} for="password">
                  Логин (testuser)
                </label>
                <input className={"form-control"} defaultValue={password} id="password" name="user" type="text" onChange={e => onUserPasswordChange(e.target.value)}/>
                <input className={"form-control btn btn-primary mt-5 block-d"} type="submit" value="Войти" id="submit"/>
            </div>
          </form>
        </div>
      </div>
    </div>
    
  )
}

let mapStateToProps = (state) => {
  return (
    {
      email: state.auth.email,
      password: state.auth.password,
      isAuthorized: state.auth.isAuthorized

    }
  )
}

export default connect(mapStateToProps,{
  onUserEmailChange,
  onUserPasswordChange,
  onUserDataCheck,

})(LoginPage);