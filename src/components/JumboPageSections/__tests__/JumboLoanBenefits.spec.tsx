import React from 'react';
import {
    render,
    RenderResult,
} from '@testing-library/react';
import { JumboLoanBenefits } from '../JumboLoanBenefits';

describe('JumboLoanBenefits Component', (): void => {
    test('renders', (): void => {
        const { container }: RenderResult = render(<JumboLoanBenefits/>);
        expect(container.firstChild).toMatchSnapshot();
    });
});
