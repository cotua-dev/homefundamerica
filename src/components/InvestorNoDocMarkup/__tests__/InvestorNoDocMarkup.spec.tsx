import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { default as InvestorNoDocMarkup } from '..';

describe('InvestorNoDocMarkup component', (): void => {
    test('renders', (): void => {
        const { container }: RenderResult = render(<InvestorNoDocMarkup/>);

        expect(container.firstChild).toMatchSnapshot();
    });
});
