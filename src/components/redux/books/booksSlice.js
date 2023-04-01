import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice({
  name: 'addbook',
  initialState: {
    books: [
      {
        item_id: 'item1',
        title: 'The Great Gatsby',
        author: 'John Smith',
        category: 'Fiction',
      },
      {
        item_id: 'item2',
        title: 'Anna Karenina',
        author: 'Leo Tolstoy',
        category: 'Fiction',
      },
      {
        item_id: 'item3',
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
      state.books.filter((book) => book.id !== action.payload.id);
    },
  },
});

export const {
  addBooks, remove, displayBooks, deleteBook,
} = bookSlice.actions;

export default bookSlice.reducer;
