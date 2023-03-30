/* eslint-disable import/no-extraneous-dependencies */
import { NavLink, Outlet } from 'react-router-dom';
import './Navbar.css';

export default function NavBar() {
  return (
    <div>
      <header>
        <nav>
          <h1>Bookstore CMS</h1>
          <div>
            <NavLink to="/">Books</NavLink>
            <NavLink to="category">Category</NavLink>
          </div>
        </nav>
      </header>
      <main className="navMenu">
        <Outlet />
      </main>
    </div>
  );
}
