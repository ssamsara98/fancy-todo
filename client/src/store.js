import { combineReducers, createStore } from 'redux';

import authReducer from './stores/reducers/authReducer';

const rooReducer = combineReducers({ auth: authReducer });

const store = createStore(rooReducer);

export default store;
