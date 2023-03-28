import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFoundPage from './NotFoundPage';

describe('Page 404', () => {
  it('should render page 404', () => {
    render(<NotFoundPage />);
    expect(screen.getByRole('heading', { name: '404' }));
  });
});
