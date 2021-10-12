import React from 'react';
import {
    render,
    RenderResult,
} from '@testing-library/react';
import { ThingsToConsider } from '../ThingsToConsider';

describe('ThingsToConsider Component', (): void => {
    test('renders', (): void => {
        const { container }: RenderResult = render(<ThingsToConsider/>);
        expect(container.firstChild).toMatchSnapshot();
    });
});
