/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice({
  name: 'addbook',
  initialState: {
    books: [
      {
        id: 'item1',
        title: 'The Great Gatsby',
        author: 'John Smith',
        category: 'Fiction',
      },
      {
        id: 'item2',
        title: 'Anna Karenina',
        author: 'Leo Tolstoy',
        category: 'Fiction',
      },
      {
        id: 'item3',
        title: 'The Selfish Gene',
        author: 'Richard Dawkins',
        category: 'Nonfiction',
      },
    ],
  },
  reducers: {
    addBooks: (state, action) => ({
      ...state.books,
      books: [...state.books, action.payload],
    }),

    deleteBook: (state, action) => {
      const bookId = action.payload;
      state.books = state.books.filter((book) => book.id !== bookId);
    },

  },
});

export const {
  addBooks, deleteBook,
} = bookSlice.actions;

export default bookSlice.reducer;
