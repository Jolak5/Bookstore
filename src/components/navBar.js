/* eslint-disable import/no-extraneous-dependencies */
import { NavLink, Outlet } from 'react-router-dom';
import './Navbar.css';
import User from '../user';

export default function NavBar() {
  return (
    <div>
      <header>
        <nav>
          <div className="left-nav">
            <h1>Bookstore CMS</h1>
            <NavLink to="/">Books</NavLink>
            <NavLink to="category">Category</NavLink>
          </div>
          <div className="user">
            <User />
          </div>
        </nav>
      </header>
      <main className="navMenu">
        <Outlet />
      </main>
    </div>
  );
}
