import React from 'react';

const LoginForm = (props) => {
  const {props:{email, password, isValid, onUserEmailChange, onUserPasswordChange}, onLoginClick} = props;
  
  return <div className={"row justify-content-md-center"}>
    <div className={"col col-12 col-md-6"}>
      <form className={"m-5"} onSubmit={onLoginClick}>
        <div className={"form-group"}>
            <label className={"mt-3"} for="login">
              Логин
            </label>
            <input className={"form-control" + (isValid ? "" : " is-invalid")} 
              defaultValue={''} id="login" name="email" type="text" 
              onChange={e => onUserEmailChange(e.target.value)}/>
            <small className={isValid ? "form-text text-muted" : "invalid-feedback"}>Логин: <b>demouser</b></small>
            <label className={"mt-3"} for="password">
              Пароль
            </label>
            <input className={"form-control" + (isValid ? "" : " is-invalid")}
              defaultValue={''} id="password" name="user" type="text"
              onChange={e => onUserPasswordChange(e.target.value)}/>
            <small className={isValid ? "form-text text-muted" : "invalid-feedback"}>Пароль: <b>demouser</b></small>
            <input className={"form-control btn btn-primary mt-5 block-d"} type="submit" value="Войти" id="submit"/>
        </div>
      </form>
    </div>
  </div>
};

export default LoginForm;