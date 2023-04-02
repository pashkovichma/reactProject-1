import { jsx as _jsx } from "react/jsx-runtime";
import Card from './card';
import data from '../../../data/data';
import { render, screen } from '@testing-library/react';
describe('Card', () => {
    it('renders card', () => {
        const { name, year, color, km, img, price, description } = data[0];
        render(_jsx(Card, { name: name, year: year, color: color, km: km, img: img, price: price, description: description }));
        expect(screen.getByText(`${name}`)).toBeDefined();
        expect(screen.getByText(`${year}`)).toBeDefined();
        expect(screen.getByText(`${color}`)).toBeDefined();
        expect(screen.getByText(`${km}`)).toBeDefined();
        expect(screen.getByText(`${price}`)).toBeDefined();
        expect(screen.getByText(`${description}`)).toBeDefined();
    });
});
