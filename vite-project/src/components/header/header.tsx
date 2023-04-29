import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './header.css';
import { Pathes } from '../../pathes/pathes-enum';

function Header() {
  const [namePage, setNamePage] = useState('');

  useEffect(() => {
    switch (window.location.pathname) {
      case '/':
        setNamePage('Home');
        break;
      case '/about':
        setNamePage('About Us');
        break;
      case '/form':
        setNamePage('Form');
        break;
    }
  }, []);

  const handleClick = (name: string) => {
    setNamePage(name);
  };

  return (
    <>
      <header className="header">
        <nav className="header__navigation">
          <ul className="navigation__list">
            <li className="navigation__item">current page: {namePage}</li>
            <li className="navigation__item">
              <NavLink
                className="navigation__link"
                to={Pathes.Home}
                onClick={() => handleClick('Home')}
              >
                Home
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink
                className="navigation__link"
                to={Pathes.About_Us}
                onClick={() => handleClick('About')}
              >
                About us
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink
                className="navigation__link"
                to={Pathes.Form}
                onClick={() => handleClick('Form')}
              >
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
}

export default Header;
