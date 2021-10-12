import React from 'react';
import {
    render,
    RenderResult,
} from '@testing-library/react';
import { WhatIsVALoan } from '../WhatIsVALoan';

describe('WhatIsVALoan Component', (): void => {
    test('renders', (): void => {
        const { container }: RenderResult = render(<WhatIsVALoan/>);
        expect(container.firstChild).toMatchSnapshot();
    });
});
