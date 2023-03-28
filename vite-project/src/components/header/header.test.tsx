import { render, screen } from '@testing-library/react';
import Header from './header';
import { MemoryRouter } from 'react-router-dom';

describe('Header component', () => {
  it('show main url', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getAllByText(/Home/i)).toBeDefined();
  });

  it('show about us url', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getAllByText(/About us/i)).toBeDefined();
  });
});
