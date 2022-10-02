import { configureStore } from '@reduxjs/toolkit';
import apiReducer from './apiReducer';

export const store = configureStore({
  reducer: {
    api: apiReducer,
  },
});

export default store;

// @todo remove this in production!! ... maybe?
window.redux = store;