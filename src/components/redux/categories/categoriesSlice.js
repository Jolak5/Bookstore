import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentStatus: false,
};

export const statusSlice = createSlice({
  name: 'checkStatus',
  initialState,
  reducers: {
    statusProperty: (state) => ({
      ...state.currentStatus,
      currentStatus: true,
    }),
  },
});

export const { statusProperty } = statusSlice.actions;

export default statusSlice.reducer;