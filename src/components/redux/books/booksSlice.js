import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice({
  name: 'addbook',
  initialState: {
    books: [],
  },
  reducers: {
    addBooks: (state, action) => ({
      ...state.books,
      books: [...state.books, action.payload],
    }),

    deleteBook: (state, action) => {
      state.books.filter((book) => book.id !== action.payload.id);
    },
  },
});

export const {
  addBooks, deleteBook,
} = bookSlice.actions;

export default bookSlice.reducer;
