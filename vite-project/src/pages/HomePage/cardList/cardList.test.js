import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import CardList from './cardList';
import data from '../../../data/data';
describe('card list', () => {
    it('renders component card list', () => {
        render(_jsx(CardList, {}));
        expect(screen.getAllByRole('img').length).toBe(data.length);
    });
});
