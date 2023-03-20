import { render, screen } from '@testing-library/react';
import Header from './header';
import { MemoryRouter } from 'react-router-dom';

describe('Header component', () => {
  it('show main', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByText(/Home/i)).toBeDefined();
  });

  it('show about us', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByText(/About us/i)).toBeDefined();
  });
});
