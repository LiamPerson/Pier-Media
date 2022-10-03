import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    sidebarShown: true,
    headerHeight: 50,
    sidebarWidth: 100,
    screenWidth: 1920,
    screenHeight: 1080,
};

export const overlaySlice = createSlice({
  name: 'overlay',
  initialState,
  reducers: {
    setSidebarShown: (state, action) => {
      state.sidebarShown = action.payload;
    },
    setSidebarWidth: (state, action) => {
      state.sidebarWidth = action.payload;
    },
    setHeaderHeight: (state, action) => {
      state.headerHeight = action.payload;
    },
    setScreenWidth: (state, action) => {
      state.screenWidth = action.payload;
    },
    setScreenHeight: (state, action) => {
      state.screenHeight = action.payload;
    }
  },
});

export const { setSidebarShown, setHeaderHeight, setSidebarWidth, setScreenWidth, setScreenHeight } = overlaySlice.actions;

export default overlaySlice.reducer;
