/* eslint-disable import/no-extraneous-dependencies */

/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuid } from 'uuid';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/HZntFTFERWdyWphmEi2T/books';

export const getBookDetails = createAsyncThunk('book/getBookDetails', async () => {
  try {
    const resp = await axios.get(url);
    return resp.data;
  } catch (error) {
    return (error.message);
  }
});

// post data to api

export const postBookDetails = createAsyncThunk('book/postBookDetails', async (books, thunkAPI) => {
  try {
    const resp = await axios.post(url, books);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error?.data?.message || 'An error occured while posting data',
    );
  }
});

// delete api
export const deleteAPIBook = createAsyncThunk(
  'books/deleteAPIBook',
  async (id, thunkAPI) => {
    try {
      const res = await axios.delete(`${url}/${id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.data?.message || 'Error occured deleting data',
      );
    }
  },
);

export const bookSlice = createSlice({
  name: 'addbook',
  initialState: {
    books: [],
    isLoading: true,
  },
  reducers: {
    addBooks: (state, action) => ({
      ...state,
      books: [...state.books, { ...action.payload, item_id: uuid() }],
    }),

    deleteBook: (state, action) => {
      const bookId = action.payload;
      state.books = state.books.filter((book) => book.item_id !== bookId);
    },
  },

  extraReducers: {
    // get a book
    [getBookDetails.pending]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [getBookDetails.fulfilled]: (state, action) => {
      state.isLoading = false;
      // eslint-disable-next-line prefer-destructuring
      const gottenBooks = action.payload;
      const newBooksArr = [];
      // const { 00f417b6-4bdb-4f08-83e9-5841e5076405 } = gottenBooks;
      // eslint-disable-next-line no-restricted-syntax, guard-for-in
      for (const id in gottenBooks) {
        const bookObj = gottenBooks[id][0];
        bookObj.item_id = id;
        newBooksArr.push(bookObj);
      }
      state.books = newBooksArr;
    },
    [getBookDetails.rejected]: (state) => ({
      ...state,
      isLoading: false,
      books: [],
    }),
    // post a book
    // [postBookDetails.pending]: (action) => {
    // },
    // [postBookDetails.fulfilled]: (state, action) => {
    //   console.log(action.payload);
    // },
  },
});

export const {
  addBooks, deleteBook,
} = bookSlice.actions;

export default bookSlice.reducer;
