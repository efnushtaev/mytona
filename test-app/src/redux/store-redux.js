import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import {authReducer} from './reducers/auth-reducer';
import thunk from 'redux-thunk';

let reducers = combineReducers({
  auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;
export default store; 