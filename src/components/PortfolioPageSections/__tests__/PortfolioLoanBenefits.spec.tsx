import React from 'react';
import {
    render,
    RenderResult,
} from '@testing-library/react';
import { PortfolioLoanBenefits } from '../PortfolioLoanBenefits';

describe('PortfolioLoanBenefits Component', (): void => {
    test('renders', (): void => {
        const { container }: RenderResult = render(<PortfolioLoanBenefits/>);
        expect(container.firstChild).toMatchSnapshot();
    });
});
