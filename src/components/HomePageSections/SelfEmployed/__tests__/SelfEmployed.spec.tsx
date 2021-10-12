import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { default as SelfEmployed } from '..';

describe('SelfEmployed component', (): void => {
    test('renders', (): void => {
        const { container }: RenderResult = render(<SelfEmployed/>);

        expect(container.firstChild).toMatchSnapshot();
    });
});
