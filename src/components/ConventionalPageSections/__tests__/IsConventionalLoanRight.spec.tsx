import React from 'react';
import {
    render,
    RenderResult,
} from '@testing-library/react';
import { IsConventionalLoanRight } from '../IsConventionalLoanRight';

describe('IsConformingLoanRight Component', (): void => {
    test('renders', (): void => {
        const { container }: RenderResult = render(<IsConventionalLoanRight/>);
        expect(container.firstChild).toMatchSnapshot();
    });
});
