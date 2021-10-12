import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Footer } from '..';

describe('Footer component', (): void => {
    test('renders', (): void => {
        const { container }: RenderResult = render(<Footer/>);

        expect(container.firstChild).toMatchSnapshot();
    });
});
