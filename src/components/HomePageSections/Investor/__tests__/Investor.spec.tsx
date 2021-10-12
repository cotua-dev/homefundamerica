import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { default as Investor } from '..';

describe('Investor component', (): void => {
    test('renders', (): void => {
        const { container }: RenderResult = render(<Investor/>);

        expect(container.firstChild).toMatchSnapshot();
    });
});
