import Card from './card';
import data from '../data/data';
import { render, screen } from '@testing-library/react';

describe('Card component', () => {
  it('renders card', () => {
    const { name, year, color, km, img, price, description } = data[0];
    render(
      <Card
        name={name}
        year={year}
        color={color}
        km={km}
        img={img}
        price={price}
        description={description}
      />
    );

    expect(screen.getByText(new RegExp(`${name}`, 'i'))).toBeDefined();
    expect(screen.getByText(new RegExp(`${year}`, 'i'))).toBeDefined();
    expect(screen.getByText(new RegExp(`${color}`, 'i'))).toBeDefined();
    expect(screen.getByText(new RegExp(`${km}`, 'i'))).toBeDefined();
    expect(screen.getByText(new RegExp(`${price}`, 'i'))).toBeDefined();
    expect(screen.getByText(new RegExp(`${description}`, 'i'))).toBeDefined();
  });
});
