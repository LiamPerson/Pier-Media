import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    sidebarShown: true,
    headerPxHeight: 50,
    sidebarPxWidth: 100
};

export const overlaySlice = createSlice({
  name: 'overlay',
  initialState,
  reducers: {
    setSidebarShown: (state, action) => {
      state.sidebarShown = action.payload;
    },
    setSidebarPxWidth: (state, action) => {
      state.sidebarPxWidth = action.payload;
    },
    setHeaderPxHeight: (state, action) => {
      state.headerPxHeight = action.payload;
    }
  },
});

export const { setSidebarShown, setHeaderPxHeight, setSidebarPxWidth } = overlaySlice.actions;

export default overlaySlice.reducer;
