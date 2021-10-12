import React from 'react';
import {
    render,
    RenderResult,
} from '@testing-library/react';
import { PortfolioLoanRecognized } from '../PortfolioLoanRecognized';

describe('PortfolioLoanRecognized Component', (): void => {
    test('renders', (): void => {
        const { container }: RenderResult = render(<PortfolioLoanRecognized/>);
        expect(container.firstChild).toMatchSnapshot();
    });
});
