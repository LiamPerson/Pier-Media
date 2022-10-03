import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    sidebarMinimised: false,
};

export const overlaySlice = createSlice({
  name: 'overlay',
  initialState,
  reducers: {
    setSidebarMinimised: (state, action) => {
      state.sidebarMinimised = action.payload;
    },
  },
});

export const { setSidebarMinimised } = overlaySlice.actions;

export default overlaySlice.reducer;
