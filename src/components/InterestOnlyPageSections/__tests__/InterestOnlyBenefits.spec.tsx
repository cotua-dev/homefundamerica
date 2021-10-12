import React from 'react';
import {
    render,
    RenderResult,
} from '@testing-library/react';
import { InterestOnlyBenefits } from '../InterestOnlyBenefits';

describe('InterestOnlyBenefits Component', (): void => {
    test('renders', (): void => {
        const { container }: RenderResult = render(<InterestOnlyBenefits/>);
        expect(container.firstChild).toMatchSnapshot();
    });
});
