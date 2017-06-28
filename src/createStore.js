import { createStore, applyMiddleware, combineReducers } from 'redux';
import {createLogger} from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import newsFeedReducer from './reducers/newsFeedReducer';
import navigationReducer from './reducers/navigationReducer';
import searchTermReducer from './reducers/searchTermReducer';

const logger = createLogger();

export default (initialState = {}) => (
  createStore(
    combineReducers({
      news: newsFeedReducer,
      searchTerm: searchTermReducer,
      navigation: navigationReducer
    }),
    initialState,
    applyMiddleware(logger, promiseMiddleware)
  )
);
