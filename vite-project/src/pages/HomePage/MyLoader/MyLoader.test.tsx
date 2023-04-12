import { MyLoader } from './MyLoader';
import { render, screen } from '@testing-library/react';

describe('Loader', () => {
  it('should render loading message', () => {
    render(<MyLoader />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
});
