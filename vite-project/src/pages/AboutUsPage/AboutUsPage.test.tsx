import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutUsPage from './AboutUSPage';

describe('Page About us', () => {
  it('renders page About us', () => {
    render(<AboutUsPage />);
    expect(
      screen.getByRole('heading', {
        name: 'About Us',
      })
    );
  });
});
