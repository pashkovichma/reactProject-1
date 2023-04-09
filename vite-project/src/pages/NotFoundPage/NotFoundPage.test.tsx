import { render, screen } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';

describe('Page 404', () => {
  it('should render page 404', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NotFoundPage />}></Route>
        </Routes>
      </BrowserRouter>
    );
    expect(screen.getByText(/GO TO HOME PAGE/i)).toBeInTheDocument();
  });
});
