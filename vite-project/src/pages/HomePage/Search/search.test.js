import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import Search from './search';
describe('Search', () => {
    it('should have text', () => {
        render(_jsx(Search, {}));
        expect(screen.getAllByPlaceholderText(/.../i)).toBeDefined();
    });
});
