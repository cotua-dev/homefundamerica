import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { default as AutomateQualification } from '..';

describe('AutomateQualification component', (): void => {
    test('renders', (): void => {
        const { container }: RenderResult = render(<AutomateQualification/>);

        expect(container.firstChild).toMatchSnapshot();
    });
});
