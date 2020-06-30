import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {onUserPasswordChange, onUserEmailChange, onUserDataCheck} from '../../../redux/reducers/auth-reducer';
import LoginForm from './login-form';

const LoginPage = (props) => {
  const {isAuthorized, onUserDataCheck, email, password, ...restProps} = props
  const handleSubmit = (e) => {
    e.preventDefault();
    onUserDataCheck(email, password)
  }
  return (
    isAuthorized 
      ? <Redirect from="/login" to="/"/>
      : <div className={"container"}>
          <LoginForm onHandleSubmit={handleSubmit} props={restProps}/>
        </div>
  )
}

let mapStateToProps = (state) => {
  return (
    {
      email: state.auth.email,
      password: state.auth.password,
      isAuthorized: state.auth.isAuthorized,
      isValid: state.auth.isValid
    }
  )
}

export default connect(mapStateToProps,{
  onUserEmailChange,
  onUserPasswordChange,
  onUserDataCheck,

})(LoginPage);