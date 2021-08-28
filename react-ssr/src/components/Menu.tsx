import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';

function Menu(): JSX.Element {
  return (
    <nav className="menu">
      <ul className="menu-list">
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
