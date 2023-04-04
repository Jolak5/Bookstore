import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/booksSlice';
import statusReducer from './categories/categoriesSlice';

export default configureStore({
  reducer: {
    book: bookReducer,
    checkStatus: statusReducer,
  },
});