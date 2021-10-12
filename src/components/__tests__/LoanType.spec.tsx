import React from 'react';
import {
    render,
    RenderResult,
} from '@testing-library/react';
import { LoanType } from '../LoanType';

describe('LoanType Component', (): void => {
    test('renders', (): void => {
        const { container }: RenderResult = render(
            <LoanType
                title="Hello World"
                content="This is test content"
                learnMore="Learn more about something"
            />
        );
        expect(container.firstChild).toMatchSnapshot();
    });
});
