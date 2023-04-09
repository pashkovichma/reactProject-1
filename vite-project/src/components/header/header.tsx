import React from 'react';
import { NavLink, useLocation, Outlet } from 'react-router-dom';
import './header.css';
import { Pathes } from '../../pathes/pathes-enum';

const Header: React.FC = () => {
  const location = useLocation();
  return (
    <>
      <header className="header">
        <nav className="header__navigation">
          <ul className="navigation__list">
            <li className="navigation__item">current page: {location.pathname.slice(1)}</li>
            <li className="navigation__item">
              <NavLink className="navigation__link" to={Pathes.Home}>
                Home
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink className="navigation__link" to={Pathes.About_Us}>
                About us
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink className="navigation__link" to={Pathes.Form}>
                Form
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className="container">
        <Outlet />
      </main>
    </>
  );
};

export default Header;
