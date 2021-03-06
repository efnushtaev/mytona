import React, {useEffect} from 'react';
import {loadingPhotos, updateFetchingStatus, onCurrentPageChanged} from './../../../redux/reducers/photos-reducer';
import {connect} from 'react-redux';
import Paginator from './../../utilities/paginator/paginator';
import Preloader from './../../utilities/preloader/preloader';
import PhotosList from './photos-list';
import {withAuthRedirection} from '../../hoc/withAuthRedirection';
import {compose} from 'redux';

const PhotosPage = (props) => {
  const {photos, currentPage, pagesSize} = props;
  const currentPhotos = photos.slice((currentPage-1) * pagesSize, ((currentPage-1) * pagesSize) + pagesSize )
  
  useEffect(() => {
    props.loadingPhotos()
  }, [])

  return <>
    <h2>Photos</h2>
    {props.isFetching && <Preloader />}
    <Paginator 
      currentPage={props.currentPage}
      onPageChanged={props.onCurrentPageChanged}
      pagesSize={props.pagesSize}
      totalItemsCount={props.photos}
    />
    <PhotosList photosList={currentPhotos}/>
  </>
}

let mapStateToProps = state => ({
  isFetching: state.photos.isFetching,
  photos: state.photos.photos,
  pagesSize: state.photos.pagesSize,
  currentPage: state.photos.currentPage
})

export default compose(connect(
  mapStateToProps, {
    loadingPhotos,
    updateFetchingStatus,
    onCurrentPageChanged
  }),withAuthRedirection)(PhotosPage);