import React from 'react';
import { connect } from 'react-redux';
import {onUserPasswordChange, onUserEmailChange, onUserDataCheck} from './../../redux/reducers/auth-reducer';

const LoginPage = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onUserDataCheck(email, password)
  }
  const {email, password, isAuthorized, onUserEmailChange, onUserPasswordChange, onUserDataCheck} = props
  return (
    <form onSubmit={handleSubmit}>
        <label>
          Email (testuser@mail.com)
        <input defaultValue={email} id="user" name="email" type="text" onChange={e => onUserEmailChange(e.target.value)}/>
        </label>
        <label>
          Логин (testuser)
          <input defaultValue={password} id="user" name="user" type="text" onChange={e => onUserPasswordChange(e.target.value)}/>
        </label>
        <label>
          Войти
          <input type="submit" value="Submit"/>
        </label>
      </form>
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