/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuid } from 'uuid';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/HZntFTFERWdyWphmEi2T/books';

export const getBookDetails = createAsyncThunk('book/getBookDetails', async () => {
  try {
    const resp = await axios(url);
    return resp.data;
  } catch (error) {
    return (error.response.data);
  }
});

export const postBookDetails = createAsyncThunk('book/getBookDetails', async (books) => {
  try {
    const resp = await axios.post(url, books);
    return resp.data;
  } catch (error) {
    return error;
  }
});

export const bookSlice = createSlice({
  name: 'addbook',
  initialState: {
    books: [],
  },
  reducers: {
    addBooks: (state, action) => ({
      ...state,
      books: [...state.books, { ...action.payload, id: uuid() }],
    }),

    deleteBook: (state, action) => {
      const bookId = action.payload;
      state.books = state.books.filter((book) => book.id !== bookId);
    },

  },
  extraReducers: {
    [getBookDetails.pending]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [getBookDetails.fulfilled]: (state, action) => ({
      ...state,
      books: action.payload,
    }),
    [getBookDetails.rejected]: (state) => ({
      ...state,
      isLoading: false,
    }),
    [postBookDetails.pending]: (state) => ({
      ...state,
      isLoading: false,
    }),
    [postBookDetails.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books.push(action.payload);
    },
    [postBookDetails.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  addBooks, deleteBook,
} = bookSlice.actions;

export default bookSlice.reducer;
