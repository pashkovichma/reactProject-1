import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage/HomePage';
import AboutUsPage from './pages/AboutUsPage/AboutUSPage';
import FormPage from './pages/FormPage/FormPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import { Pathes } from './pathes/pathes-enum';
import Header from './components/header/header';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <hr />
        <Routes>
          <Route path={Pathes.Home} element={<HomePage />} />
          <Route path={Pathes.About_Us} element={<AboutUsPage />} />
          <Route path={Pathes.Form} element={<FormPage />} />
          <Route path={Pathes.Not_Found} element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
