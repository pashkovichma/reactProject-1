import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NavLink } from "react-router-dom";
import './header.css';
function Header() {
    return (_jsx("header", { className: "header", children: _jsx("nav", { className: "header__navigation", children: _jsxs("ul", { className: "navigation__list", children: [_jsx("li", { className: "navigation__item", children: _jsx(NavLink, { className: "navigation__link", to: '/', children: "Home" }) }), _jsx("li", { className: "navigation__item", children: _jsx(NavLink, { className: "navigation__link", to: '/aboutus', children: "About us" }) })] }) }) }));
}
export default Header;
