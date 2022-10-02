import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    error: "", // Error display
};

export const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setError } = apiSlice.actions;

export default apiSlice.reducer;
