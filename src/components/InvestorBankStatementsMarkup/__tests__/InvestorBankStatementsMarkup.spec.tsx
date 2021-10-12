import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { default as InvestorBankStatementsMarkup } from '..';

describe('InvestorBankStatementsMarkup component', (): void => {
    test('renders', (): void => {
        const { container }: RenderResult = render(<InvestorBankStatementsMarkup/>);

        expect(container.firstChild).toMatchSnapshot();
    });
});
