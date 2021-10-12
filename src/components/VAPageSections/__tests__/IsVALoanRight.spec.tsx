import React from 'react';
import {
    render,
    RenderResult,
} from '@testing-library/react';
import { IsVALoanRight } from '../IsVALoanRight';

describe('IsVALoanRight Component', (): void => {
    test('renders', (): void => {
        const { container }: RenderResult = render(<IsVALoanRight/>);
        expect(container.firstChild).toMatchSnapshot();
    });
});
