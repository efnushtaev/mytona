import React, {useEffect, useState} from 'react';
import {loadingPhotos, updateFetchingStatus} from './../../redux/reducers/photos-reducer';
import { connect } from 'react-redux';

const PhotosPage = (props) => {
  const lastPhoto = 1 * props.photosPerPage;
  const firstPhoto = lastPhoto - props.photosPerPage;
  const currentPhotos = props.photos.slice(firstPhoto, lastPhoto);
  
  let pages = [];
  let pagesCount = Math.ceil((props.photos).length / props.photosPerPage)
  debugger
  for(let i=0; i <= pagesCount; i++) {
    debugger
    pages.push(i)
  }
  // setPagesCount(pages)

  useEffect(() => {
    props.loadingPhotos()
  }, [])
  
  return <>
    <h1>Photos</h1>
        {props.isFetching && <span>loading...</span>}
      <ul>
        {pages.map(e => {
          return <li key={e}>{e}</li>
        })}
      </ul>
      {currentPhotos.map(e => {
        return <img style={{width:'10%'}} src={e.url}/>
      })}
    </>
}

let mapStateToProps = state => ({
  isFetching: state.photos.isFetching,
  photos: state.photos.photos,
  photosPerPage: state.photos.photosPerPage
})

export default connect(mapStateToProps, {loadingPhotos, updateFetchingStatus})(PhotosPage);