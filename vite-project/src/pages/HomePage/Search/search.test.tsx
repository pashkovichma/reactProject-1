import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchInput from './search';

describe('Search', () => {
  it('should have text', () => {
    render(<SearchInput />);
    expect(screen.getAllByPlaceholderText(/.../)).toBeInTheDocument();
  });
});
