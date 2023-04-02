import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="header__navigation">
        <ul className="navigation__list">
          <li className="navigation__item">
            <NavLink className="navigation__link" to={'/'}>
              Home
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink className="navigation__link" to={'/aboutus'}>
              About us
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink className="navigation__link" to={'/form'}>
              Form
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
