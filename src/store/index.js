import { createStore } from 'redux';
import appReducer from '../reducers';

const appStore = (initialState) => {
  const store = createStore(appReducer, initialState);
  return store;
};

export default appStore();
