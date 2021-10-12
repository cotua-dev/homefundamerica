import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { default as NationsPremier } from '..';

describe('NationsPremier component', (): void => {
    test('renders', (): void => {
        const { container }: RenderResult = render(<NationsPremier/>);

        expect(container.firstChild).toMatchSnapshot();
    });
});
