import React from 'react';
import {
    render,
    RenderResult,
} from '@testing-library/react';
import { WhatIsFHALoan } from '../WhatIsFHALoan';

describe('WhatIsFHALoan Component', (): void => {
    test('renders', (): void => {
        const { container }: RenderResult = render(<WhatIsFHALoan/>);
        expect(container.firstChild).toMatchSnapshot();
    });
});
