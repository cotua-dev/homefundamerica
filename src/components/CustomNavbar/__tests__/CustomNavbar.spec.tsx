import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { CustomNavbar } from '..';

describe('CustomNavbar component', (): void => {
    test('renders', (): void => {
        const { container }: RenderResult = render(<CustomNavbar/>);

        expect(container.firstChild).toMatchSnapshot();
    });
});
