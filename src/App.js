/* eslint-disable import/no-extraneous-dependencies */
import './App.css';
import {
  createBrowserRouter, Route, createRoutesFromElements, RouterProvider,
} from 'react-router-dom';
import NavBar from './components/navBar';
import Books from './components/books';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route index element={<Books />} />
    </Route>,
  ),
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
