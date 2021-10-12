import React from 'react';
import {
    render,
    RenderResult,
} from '@testing-library/react';
import { ReadyGetStarted } from '../ReadyGetStarted';

describe('ReadyGetStarted Component', (): void => {
    test('renders', (): void => {
        const { container }: RenderResult = render(<ReadyGetStarted/>);
        expect(container.firstChild).toMatchSnapshot();
    });
});
