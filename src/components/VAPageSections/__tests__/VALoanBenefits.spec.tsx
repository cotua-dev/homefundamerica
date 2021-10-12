import React from 'react';
import {
    render,
    RenderResult,
} from '@testing-library/react';
import { VALoanBenefits } from '../VALoanBenefits';

describe('VALoanBenefits Component', (): void => {
    test('renders', (): void => {
        const { container }: RenderResult = render(<VALoanBenefits/>);
        expect(container.firstChild).toMatchSnapshot();
    });
});
