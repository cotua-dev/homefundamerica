import React from 'react';
import {
    render,
    RenderResult,
} from '@testing-library/react';
import { IsNonConventionalLoanRight } from '../IsNonConventionalLoanRight';

describe('IsNonConventionalLoanRight Component', (): void => {
    test('renders', (): void => {
        const { container }: RenderResult = render(<IsNonConventionalLoanRight/>);
        expect(container.firstChild).toMatchSnapshot();
    });
});
