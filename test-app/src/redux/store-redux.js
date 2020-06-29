import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import {authReducer} from './reducers/auth-reducer';
import {photosReducer} from './reducers/photos-reducer';
import thunk from 'redux-thunk';

let reducers = combineReducers({
  auth: authReducer,
  photos: photosReducer
})

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;
export default store; 