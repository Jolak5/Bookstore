import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: [],
  },
  reducers: {
    increment: (state) => {
      state.value.push('1');
    },
    decrement: (state) => {
      state.value.pop();
    },
    incrementByAmount: (state, action) => {
      state.books.filter((book) => book.id !== action.payload.id);
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
