import React from 'react';
import {
    render,
    RenderResult,
} from '@testing-library/react';
import { WhatIsJumboLoan } from '../WhatIsJumboLoan';

describe('WhatIsJumboLoan Component', (): void => {
    test('renders', (): void => {
        const { container }: RenderResult = render(<WhatIsJumboLoan/>);
        expect(container.firstChild).toMatchSnapshot();
    });
});
