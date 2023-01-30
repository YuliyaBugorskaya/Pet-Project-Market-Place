/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar() {
  const links = ['jewelery', 'electronics', 'men`s', 'clothing', 'women`s clothing'];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavLink className="nav-link" to="/">home</NavLink>

            {links.map((el) => (
              <li key={el} className="nav-item">

                <NavLink className="nav-link" to={`/category/${el}`}>
                  {' '}
                  {el}
                  {' '}
                </NavLink>
              </li>
            ))}
            <NavLink className="nav-link" to="/basket">basket</NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}
