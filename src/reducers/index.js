import { combineReducers } from 'redux';
import galleryState from './galleryState';

const appReducer = combineReducers({
  galleryState
});

export default appReducer;
