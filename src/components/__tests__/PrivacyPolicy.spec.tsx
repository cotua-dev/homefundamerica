import React from 'react';
import {
    render,
    RenderResult,
} from '@testing-library/react';
import { PrivacyPolicy } from '../PrivacyPolicy';

describe('PrivacyPolicy Component', (): void => {
    test('renders', (): void => {
        const { container }: RenderResult = render(<PrivacyPolicy/>);
        expect(container.firstChild).toMatchSnapshot();
    });
});
