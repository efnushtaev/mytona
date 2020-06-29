import React from 'react'
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from './view/login-page/login-page';
import MainPage from './view/main-page/main-page';
import PhotosPage from './view/photos-page/photos-page';
import PostsPage from './view/posts-page/posts-page';
import NavigationBar from './view/navigation-bar/navigation-bar';
import { connect } from 'react-redux';

const App = ({isAuthorized}) => {
  
  return (
    <div className="container-fluid mt-3">
      <div>
        <NavigationBar/>
      </div>
      <div>
      <Switch>
        <Route path="/login" render={() => <LoginPage/>} />
        {isAuthorized 
          ? <Route path="/posts" render={() => <PostsPage/>} />
          : <Redirect from="/posts" to="/login"/>
        }
        {isAuthorized 
          ? <Route path="/photos" render={() => <PhotosPage/>} />
          : <Redirect from="/photos" to="/login"/>
        }
        {isAuthorized 
          ? <Route exact path="/" render={() => <MainPage/>} />
          : <Redirect from="/" to="/login"/>
        }
        
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