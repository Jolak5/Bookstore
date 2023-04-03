import './App.css';
import {
  createBrowserRouter, Route, createRoutesFromElements, RouterProvider,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavBar from './components/navBar';
import Home from './pages/Home';
import Category from './pages/category';
import { statusProperty } from './components/redux/categories/categoriesSlice';

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
  dispatch(statusProperty());
  return (
    <RouterProvider router={router} />
  );
}

export default App;
