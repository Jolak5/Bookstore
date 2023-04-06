import './App.css';
import {
  createBrowserRouter, Route, createRoutesFromElements, RouterProvider,
} from 'react-router-dom';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NavBar from './components/navBar';
import Category from './pages/category';
import Home from './pages/Home';
import { getBookDetails } from './components/redux/books/booksSlice';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route index element={<Home />} />
      <Route path="Category" index element={<Category />} />
    </Route>,
  ),
);

function App() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.book);
  useEffect(() => {
    dispatch(getBookDetails());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading ....</h1>
      </div>
    );
  }

  return (
    <RouterProvider router={router} />
  );
}

export default App;
