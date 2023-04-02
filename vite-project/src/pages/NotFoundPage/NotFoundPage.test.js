import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import NotFoundPage from './NotFoundPage';
describe('Page 404', () => {
    it('should render page 404', () => {
        render(_jsx(NotFoundPage, {}));
        expect(screen.getByRole('heading', { name: '404' }));
    });
});
