import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './view/login-page/login-page';
import MainPage from './view/main-page/main-page';
import AlbumsPage from './view/albums-page/albums-page';
import PostsPage from './view/posts-page/posts-page';
import NavigationBar from './view/navigation-bar/navigation-bar';

const App = () => {
  return (
    <div className="AppContainer">
      <div>
        <NavigationBar/>
      </div>
      <div>
      <Switch>
        <Route path="/albums" render={() => <AlbumsPage/>} />
        <Route path="/posts" render={() => <PostsPage/>} />
        <Route path="/login" render={() => <LoginPage/>} />
        <Route path="/" render={() => <MainPage/>} />
        <Route path="*" render={() => <h1>404</h1>} />
      </Switch>

      </div>



    </div>
  );
}

export default App;