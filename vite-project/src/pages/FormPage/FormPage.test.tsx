import React from 'react';
import { render, screen } from '@testing-library/react';
import FormPage from './FormPage';

describe('Page Form', () => {
  it('should render page Form', () => {
    render(<FormPage />);
    expect(
      screen.getByRole('heading', {
        name: new RegExp('Fill the form', 'i'),
      })
    );
  });
});
