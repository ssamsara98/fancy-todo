import React, { Component } from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';
import Home from './views/home/Home';
import Login from './views/login/Login';
import NotFound from './views/not-found/NotFound';
import Register from './views/register/Register';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route
            path="/"
            exact
            render={(p)=>{
              return <Home {...p} />;
            }}
          />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/404" exact component={NotFound} />
          <Route path="*">
            <Redirect to="/404" />
          </Route>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
