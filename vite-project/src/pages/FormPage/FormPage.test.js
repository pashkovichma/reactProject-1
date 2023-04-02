import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import FormPage from './FormPage';
describe('Page Form', () => {
    it('should render page Form', () => {
        render(_jsx(FormPage, {}));
        expect(screen.getByRole('heading', {
            name: 'Form page',
        }));
    });
});
