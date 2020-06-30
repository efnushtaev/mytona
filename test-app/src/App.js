import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from './view/components/login-page/login-page';
import MainPage from './view/components/main-page/main-page';
import PhotosPage from './view/components/photos-page/photos-page';
import PostsPage from './view/components/posts-page/posts-page';
import NavigationBar from './view/components/navigation-bar/navigation-bar';
import { connect } from 'react-redux';

const App = () => {
  
  return (
    <div className="container-fluid mt-3">
      <div>
        <NavigationBar/>
      </div>
      <div>
      <Switch>
        <Route path="/login" render={() => <LoginPage/>} />
        <Route path="/posts" render={() => <PostsPage/>} />
        <Route path="/photos" render={() => <PhotosPage/>} />
        <Route exact path="/" render={() => <MainPage/>} />
        <Route path="*" render={() => <h1>404</h1>} />
      </Switch>

      </div>
    </div>
  );
}

let mapStateToProps = (state) => ({
  isAuthorized: state.auth.isAuthorized
})
export default connect(mapStateToProps, {})(App);