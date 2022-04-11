import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import eventsReducer from './events';

const reducer = combineReducers({ events: eventsReducer });

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;
