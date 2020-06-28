import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import {updateAuthorization} from './../../redux/reducers/auth-reducer'

const NavigationBar = ({isAuthorized, updateAuthorization}) => {
  return (
    <div>
      <h4 className={"text-info"}>Efim Nushtaev</h4>
      <ul className={"nav justify-content-end"}>
        <li className={"nav-item"}>
          <NavLink activeClassName={"active"} className={"nav-link"} to="/">Main</NavLink>
        </li>
        <li className={"nav-item"}>
          <NavLink activeClassName={"active"} className={"nav-link"} to="/posts">Posts</NavLink>
        </li>
        <li>
          <NavLink activeClassName={"active"} className={"nav-link"} to="/albums">Albums</NavLink>
        </li>
        <li>
          {isAuthorized
            ? <button className={"btn btn-link nav-link border-left text-dark"} onClick={() => updateAuthorization(false)}>Logout</button>
            : <NavLink activeClassName={"active"} className={"nav-link border-left"} to="/login">Login</NavLink>
          }
        </li>
      </ul>
    </div>
  )
}

let mapStateToProps = (state) => ({
  isAuthorized: state.auth.isAuthorized
})

export default connect(mapStateToProps, {updateAuthorization})(NavigationBar)