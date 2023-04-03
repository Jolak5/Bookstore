/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  array: ['kayode', 'aremu'],
  currentStatus: '',
};

export const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    statusProperty: (state) => {
      state.currentStatus = 'Under construction';
    },
  },
});

export const { statusProperty } = statusSlice.actions;

export default statusSlice.reducer;
