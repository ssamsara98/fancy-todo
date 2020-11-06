import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';
import { authTryAutoLogin } from './stores/actions/authAction';
import Home from './views/home/Home';
import Login from './views/login/Login';
import NotFound from './views/not-found/NotFound';
import Register from './views/register/Register';

class App extends Component {
  componentDidMount() {
    const { rdxAutoLogin } = this.props;
    rdxAutoLogin();
  }

  render() {
    const { isAuthenticated } = this.props;

    return (
      <HashRouter>
        <Switch>
          <Route
            path="/"
            exact
            component={(routeProps) =>
              isAuthenticated ? <Home {...routeProps} /> : <Redirect to="/login" />
            }
          />
          <Route
            path="/login"
            exact
            render={(routeProps) =>
              isAuthenticated ? <Redirect to="/" /> : <Login {...routeProps} />
            }
          />
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

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.token !== null,
});

const mapDispatchToProps = {
  rdxAutoLogin: authTryAutoLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
