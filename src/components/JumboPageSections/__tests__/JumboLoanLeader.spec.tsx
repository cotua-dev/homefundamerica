import React from 'react';
import {
    render,
    RenderResult,
} from '@testing-library/react';
import { JumboLoanLeader } from '../JumboLoanLeader';

describe('JumboLoanLeader Component', (): void => {
    test('renders', (): void => {
        const { container }: RenderResult = render(<JumboLoanLeader/>);
        expect(container.firstChild).toMatchSnapshot();
    });
});
