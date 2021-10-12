import React from 'react';
import {
    render,
    RenderResult,
} from '@testing-library/react';
import { NonConventionalLoanBenefits } from '../NonConventionalLoanBenefits';

describe('NonConventionalLoanBenefits Component', (): void => {
    test('renders', (): void => {
        const { container }: RenderResult = render(<NonConventionalLoanBenefits/>);
        expect(container.firstChild).toMatchSnapshot();
    });
});
