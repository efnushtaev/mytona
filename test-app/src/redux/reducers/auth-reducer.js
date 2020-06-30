import defaultAuthData from './../../config/constant';

const SET_USER_EMAIL = 'auth/SET_USER_EMAIL';
const SET_USER_PASSWORD = 'auth/SET_USER_PASSWORD';
const UPDATE_AUTHORZATION = 'auth/UPDATE_AUTHORZATION';

let initialState = {
  email: '',
  password: '',
  isAuthorized: false,
  isValid: true
}

export const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USER_EMAIL: {
      return {
        ...state,
        email: action.payload
      }
    }
    case SET_USER_PASSWORD: {
      return {
        ...state,
        password: action.payload
      }
    }
    case UPDATE_AUTHORZATION: {
      debugger
      return {
        ...state,
        isAuthorized: action.payload,
        isValid: action.payload
      }
    }
    default:
      return state
  }
}

export const onUserEmailChange = payload => ({type: SET_USER_EMAIL, payload})
export const onUserPasswordChange = payload => ({type: SET_USER_PASSWORD, payload})
export const updateAuthorization = payload => ({type: UPDATE_AUTHORZATION, payload})

export const onUserDataCheck = (email, password) => dispatch => {
  const authDataMatchChecking = (defaultAuthData) => {
    if(defaultAuthData.LOGIN === email && defaultAuthData.PASSWORD === password) {
      dispatch(updateAuthorization(true))
    } else {
      dispatch(updateAuthorization(false))
    }
  } 
  authDataMatchChecking(defaultAuthData)
}
