import React from 'react';
import {
    render,
    RenderResult,
} from '@testing-library/react';
import { WhatIsConventionalLoan } from '../WhatIsConventionalLoan';

describe('WhatIsConventionalLoan Component', (): void => {
    test('renders', (): void => {
        const { container }: RenderResult = render(<WhatIsConventionalLoan/>);
        expect(container.firstChild).toMatchSnapshot();
    });
});
