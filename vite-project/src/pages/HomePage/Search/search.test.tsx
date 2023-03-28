import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from './search';

describe('Search', () => {
  it('should have text', () => {
    render(<Search />);
    expect(screen.getAllByPlaceholderText(/.../i)).toBeDefined();
  });
});
