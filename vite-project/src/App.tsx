import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage/HomePage';
import AboutUsPage from './pages/AboutUsPage/AboutUSPage';
import FormPage from './pages/FormPage/FormPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

import Header from './components/header/header';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <hr />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
