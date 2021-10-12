import React from 'react';
import {
    render,
    RenderResult,
} from '@testing-library/react';
import { WhatIsInterestOnlyLoan } from '../WhatIsInterestOnlyLoan';

describe('WhatIsInterestOnlyLoan Component', (): void => {
    test('renders', (): void => {
        const { container }: RenderResult = render(<WhatIsInterestOnlyLoan/>);
        expect(container.firstChild).toMatchSnapshot();
    });
});
