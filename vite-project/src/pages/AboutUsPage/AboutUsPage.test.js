import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import AboutUsPage from './AboutUSPage';
describe('Page About us', () => {
    it('renders page About us', () => {
        render(_jsx(AboutUsPage, {}));
        expect(screen.getByRole('heading', {
            name: 'About Us',
        }));
    });
});
