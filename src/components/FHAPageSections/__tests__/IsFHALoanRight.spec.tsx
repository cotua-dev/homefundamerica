import React from 'react';
import {
    render,
    RenderResult,
} from '@testing-library/react';
import { IsFHALoanRight } from '../IsFHALoanRight';

describe('IsFHALoanRight Component', (): void => {
    test('renders', (): void => {
        const { container }: RenderResult = render(<IsFHALoanRight/>);
        expect(container.firstChild).toMatchSnapshot();
    });
});
