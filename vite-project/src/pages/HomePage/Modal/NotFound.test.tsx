import { NotFound } from './NotFound';
import { render, screen } from '@testing-library/react';

describe('Not found', () => {
  it('should render not found message', () => {
    render(<NotFound />);
    expect(screen.getByText(/Sorry/i)).toBeInTheDocument();
  });
});
