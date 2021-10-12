import React from 'react';
import {
    render,
    RenderResult,
} from '@testing-library/react';
import { LoanBenefits } from '../LoanBenefits';

describe('LoanBenefits Component', (): void => {
    test('renders', (): void => {
        const { container }: RenderResult = render(<LoanBenefits/>);
        expect(container.firstChild).toMatchSnapshot();
    });
});
