import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    sidebarShown: true,
};

export const overlaySlice = createSlice({
  name: 'overlay',
  initialState,
  reducers: {
    setSidebarShown: (state, action) => {
      state.sidebarShown = action.payload;
    },
  },
});

export const { setSidebarShown } = overlaySlice.actions;

export default overlaySlice.reducer;
