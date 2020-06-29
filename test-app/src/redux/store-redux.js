import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import {authReducer} from './reducers/auth-reducer';
import {photosReducer} from './reducers/photos-reducer';
import {postsReducer} from './reducers/posts-reducer';
import thunk from 'redux-thunk';

let reducers = combineReducers({
  auth: authReducer,
  photos: photosReducer,
  posts: postsReducer
})

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;
export default store; 