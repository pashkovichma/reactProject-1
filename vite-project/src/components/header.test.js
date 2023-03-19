import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import Header from "./header";
import { MemoryRouter } from 'react-router-dom';
describe('Header component', () => {
    it('show main', () => {
        render(_jsx(MemoryRouter, { children: _jsx(Header, {}) }));
        expect(screen.getByText(/Home/i)).toBeDefined();
    });
    it('show about us', () => {
        render(_jsx(MemoryRouter, { children: _jsx(Header, {}) }));
        expect(screen.getByText(/About us/i)).toBeDefined();
    });
});
