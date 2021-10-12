import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { default as StatedIncomeMarkup } from '..';

describe('StatedIncomeMarkup component', (): void => {
    test('renders', (): void => {
        const { container }: RenderResult = render(<StatedIncomeMarkup/>);

        expect(container.firstChild).toMatchSnapshot();
    });
});
