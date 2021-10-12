import React from 'react';
import {
    render,
    RenderResult,
} from '@testing-library/react';
import { WhatIsNonConventionalLoan } from '../WhatIsNonConventionalLoan';

describe('WhatIsNonConventionalLoan Component', (): void => {
    test('renders', (): void => {
        const { container }: RenderResult = render(<WhatIsNonConventionalLoan/>);
        expect(container.firstChild).toMatchSnapshot();
    });
});
