import { Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage/HomePage';
import AboutUsPage from './pages/AboutUsPage/AboutUSPage';
import FormPage from './pages/FormPage/FormPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import { Pathes } from './pathes/pathes-enum';
import Header from './components/header/header';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Header />,
      children: [
        {
          index: true,
          element: <Navigate to={Pathes.Home} replace />,
        },
        {
          path: Pathes.Home,
          element: <HomePage />,
        },
        {
          path: Pathes.About_Us,
          element: <AboutUsPage />,
        },
        {
          path: Pathes.Form,
          element: <FormPage />,
        },
      ],
    },
    {
      path: '/*',
      element: <NotFoundPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
