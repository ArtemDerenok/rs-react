import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTypeSelector } from '../hooks/useTypeSelector';
import './Menu.css';

function Menu(): JSX.Element {
  const menuFlagValue = useTypeSelector((state) => state.menuFlag.flag);

  return (
    <nav className={`menu ${menuFlagValue ? 'hidden' : ''}`}>
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
