import React from 'react';
import {
    render,
    RenderResult,
} from '@testing-library/react';
import { ConventionalLoanBenefits } from '../ConventionalLoanBenefits';

describe('ConformingLoanBenefits Component', (): void => {
    test('renders', (): void => {
        const { container }: RenderResult = render(<ConventionalLoanBenefits/>);
        expect(container.firstChild).toMatchSnapshot();
    });
});
