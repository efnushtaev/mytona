import React, {useEffect} from 'react';
import {loadingPosts, updateFetchingStatus, onCurrentPageChanged} from '../../../redux/reducers/posts-reducer';
import { connect } from 'react-redux';
import Paginator from '../../utilities/paginator/paginator';
import Preloader from '../../utilities/preloader/preloader';
import PostsTable from './posts-table';

const PostsPage = (props) => {
  const {posts, currentPage, pagesSize} = props;
  const currentPosts = posts.slice((currentPage-1) * pagesSize, ((currentPage-1) * pagesSize) + pagesSize )
  
  useEffect(() => {
    props.loadingPosts()
  }, [])

  return <>
    <h2>Posts</h2>
    {props.isFetching && <Preloader />}
    <Paginator 
      currentPage={props.currentPage}
      onPageChanged={props.onCurrentPageChanged}
      pagesSize={props.pagesSize}
      totalItemsCount={props.posts}
    />
    <PostsTable postsList={currentPosts}/>
  </>
}

let mapStateToProps = state => ({
  isFetching: state.posts.isFetching,
  posts: state.posts.posts,
  pagesSize: state.posts.pagesSize,
  currentPage: state.posts.currentPage
})

export default connect(
  mapStateToProps, {
    loadingPosts,
    updateFetchingStatus,
    onCurrentPageChanged
  })(PostsPage);