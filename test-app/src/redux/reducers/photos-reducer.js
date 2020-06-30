import {usersAPI} from "../../data/api";

const SET_PHOTOS = 'photos/SET_USER_EMAIL';
const IS_FETCHING = 'photos/SET_USER_PASSWORD';
const ON_CURRENT_PAGE_CHANGED = 'photos/ON_CURRENT_PAGE_CHANGED';
const SET_PAGES_COUNT = 'photos/SET_PAGES_COUNT';

let initialState = {
  photos: [],
  isFetching: '',
  pagesSize: 100,
  pageCount: '',
  currentPage: 1
}

export const photosReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_PHOTOS: {
      return {
        ...state,
        photos: action.payload
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
export const setPhotos = payload => ({type: SET_PHOTOS, payload})
export const setPagesCount = payload => ({type: SET_PAGES_COUNT, payload})
export const onCurrentPageChanged = payload => ({type: ON_CURRENT_PAGE_CHANGED, payload})

export const loadingPhotos = () => async (dispatch) => {
  dispatch(updateFetchingStatus(true))
  let response = await usersAPI.getPhotos()
  dispatch(setPagesCount)
  if(response.status === 200) {
    dispatch(updateFetchingStatus(false))
    dispatch(setPhotos(response.data))
  } else {
    console.error('status: ' + response.status)
  }
}