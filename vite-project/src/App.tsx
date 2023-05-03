import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage/HomePage';
import AboutUsPage from './pages/AboutUsPage/AboutUSPage';
import FormPage from './pages/FormPage/FormPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import { Pathes } from './pathes/pathes-enum';
import Header from './components/header/header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={Pathes.Home} element={<HomePage />}></Route>
        <Route path={Pathes.About_Us} element={<AboutUsPage />}></Route>
        <Route path={Pathes.Form} element={<FormPage />}></Route>
        <Route path={Pathes.NotFound} element={<NotFoundPage />}></Route>
        <Route path={Pathes.Not_Found} element={<Navigate to={Pathes.NotFound} />}></Route>
      </Routes>
    </>
  );
}

export default App;
