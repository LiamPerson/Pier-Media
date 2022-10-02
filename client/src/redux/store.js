import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {},
});

export default store;

// @todo remove this in production!! ... maybe?
window.redux = store;