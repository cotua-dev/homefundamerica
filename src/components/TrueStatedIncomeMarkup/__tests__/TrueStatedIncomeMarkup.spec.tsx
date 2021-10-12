import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { default as TrueStatedIncomeMarkup } from '..';

describe('TrueStatedIncomeMarkup component', (): void => {
    test('renders', (): void => {
        const { container }: RenderResult = render(<TrueStatedIncomeMarkup/>);

        expect(container.firstChild).toMatchSnapshot();
    });
});
