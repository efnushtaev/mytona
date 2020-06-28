import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from './view/login-page/login-page';
import MainPage from './view/main-page/main-page';
import AlbumsPage from './view/albums-page/albums-page';
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
        {isAuthorized 
          ? <Route path="/albums" render={() => <AlbumsPage/>} />
          : <Redirect from="/albums" to="/login"/>
        }
        {isAuthorized 
          ? <Route path="/posts" render={() => <PostsPage/>} />
          : <Redirect from="/posts" to="/login"/>
        }
        <Route path="/login" render={() => <LoginPage/>} />
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