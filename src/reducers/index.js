import { combineReducers } from 'redux';
import galleryState from './galleryState';
import viewerState from './viewerState';

const appReducer = combineReducers({
  galleryState,
  viewerState
});

export default appReducer;
