import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { default as Testimonials } from '..';

describe('Testimonials component', (): void => {
    test('renders', (): void => {
        const { container }: RenderResult = render(<Testimonials/>);

        expect(container.firstChild).toMatchSnapshot();
    });
});
