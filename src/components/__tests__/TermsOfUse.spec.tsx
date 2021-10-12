import React from 'react';
import {
    render,
    RenderResult,
} from '@testing-library/react';
import { TermsOfUse } from '../TermsOfUse';

describe('TermsOfUse Component', (): void => {
    test('renders', (): void => {
        const { container }: RenderResult = render(<TermsOfUse/>);
        expect(container.firstChild).toMatchSnapshot();
    });
});
