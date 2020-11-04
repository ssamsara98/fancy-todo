import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import authReducer from './stores/reducers/authReducer';

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const rooReducer = combineReducers({ auth: authReducer });

const store = createStore(rooReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
