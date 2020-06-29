import {usersAPI} from "../../data/api";

const SET_PHOTOS = 'auth/SET_USER_EMAIL';
const IS_FETCHING = 'auth/SET_USER_PASSWORD';
const SET_PAGES_COUNT = 'auth/SET_PAGES_COUNT';

let initialState = {
  photos: [],
  isFetching: "",
  photosPerPage: 200,
  pageCount: ''
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
export const onSettingPhotos = payload => ({type: SET_PHOTOS, payload})
export const setPagesCount = payload => ({type: SET_PAGES_COUNT, payload})

export const loadingPhotos = () => async (dispatch) => {
    dispatch(updateFetchingStatus(true))
    let response = await usersAPI.getPhotos()
    dispatch(setPagesCount)
    dispatch(updateFetchingStatus(false))
    debugger
    if(response.status === 200) {
        dispatch(onSettingPhotos(response.data))
    } else {
        console.error('status: ' + response.status)
    }
}