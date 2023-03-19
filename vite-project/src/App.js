import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUSPage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/header';
function App() {
    return (_jsxs(BrowserRouter, { children: [_jsx(Header, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/aboutus", element: _jsx(AboutUsPage, {}) }), _jsx(Route, { path: "*", element: _jsx(NotFoundPage, {}) })] })] }));
}
export default App;
