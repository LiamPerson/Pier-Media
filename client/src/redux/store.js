import { configureStore } from '@reduxjs/toolkit';
import apiReducer from './apiReducer';
import overlayReducer from './overlayReducer';

export const store = configureStore({
  reducer: {
    api: apiReducer,
    overlay: overlayReducer,
  },
});

export default store;

// @todo remove this in production!! ... maybe?
window.redux = store;