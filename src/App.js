/* eslint-disable import/no-extraneous-dependencies */
import './App.css';
import {
  createBrowserRouter, Route, createRoutesFromElements, RouterProvider,
} from 'react-router-dom';
import NavBar from './components/navBar';
import Books from './pages/books';
import Category from './pages/category';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route index element={<Books />} />
      <Route path="Category" index element={<Category />} />
    </Route>,
  ),
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
