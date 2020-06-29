import {usersAPI} from "../../data/api";

const SET_POSTS = 'posts/SET_USER_EMAIL';
const IS_FETCHING = 'posts/SET_USER_PASSWORD';
const ON_CURRENT_PAGE_CHANGED = 'posts/ON_CURRENT_PAGE_CHANGED';
const SET_PAGES_COUNT = 'posts/SET_PAGES_COUNT';

let initialState = {
  posts: [],
  isFetching: '',
  pagesSize: 10,
  pageCount: '',
  currentPage: 1
}

export const postsReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_POSTS: {
      return {
        ...state,
        posts: action.payload
      }
    }
    case IS_FETCHING: {
      return {
        ...state,
        isFetching: action.payload
      }
    }
    case ON_CURRENT_PAGE_CHANGED: {
      return {
        ...state,
        currentPage: action.payload
      }
    }
    case SET_PAGES_COUNT: {
      return {
        ...state,
        pagesCount: action.payload
      }
    }
    default:
      return state
  }
}

export const updateFetchingStatus = payload => ({type: IS_FETCHING, payload}) 
export const setPosts = payload => ({type: SET_POSTS, payload})
export const setPagesCount = payload => ({type: SET_PAGES_COUNT, payload})
export const onCurrentPageChanged = payload => ({type: ON_CURRENT_PAGE_CHANGED, payload})

export const loadingPosts = () => async (dispatch) => {
  dispatch(updateFetchingStatus(true))
  let response = await usersAPI.getPosts()
  debugger
  dispatch(setPagesCount)
  if(response.status === 200) {
    dispatch(updateFetchingStatus(false))
    dispatch(setPosts(response.data))
  } else {
    console.error('status: ' + response.status)
  }
}