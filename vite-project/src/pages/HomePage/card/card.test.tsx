import Card from './card';
import { render, screen } from '@testing-library/react';
import { mockSetCard, mockCard } from './mock';

describe('Card', () => {
  it('renders card', () => {
    render(<Card setCard={mockSetCard} picture={mockCard} />);

    expect(screen.getByText(`a`)).toBeInTheDocument;
  });
});
