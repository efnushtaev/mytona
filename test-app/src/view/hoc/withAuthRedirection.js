import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

let mapStateToPropsForRedirect = (state) => ({
  isAuthorized:state.auth.isAuthorized
});

export const withAuthRedirection = (Component) => {
  const AuthRedirectComponent = (props) => {
      return !props.isAuthorized
        ? <Redirect to='/login'/>
        : <Component {...props}/>
  }
  let connectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent);
  return connectedAuthRedirectComponent
} 