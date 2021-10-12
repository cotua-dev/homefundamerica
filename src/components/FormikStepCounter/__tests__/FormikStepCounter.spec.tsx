import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { default as FormikStepCounter } from '..';
import { Props } from '../FormikStepCounter.interfaces';

describe('FormikStepCounter component', (): void => {
    test('renders', (): void => {
        const props: Props = {
            stepNumber: 0,
            totalSteps: 0,
        };
        const { container }: RenderResult = render(<FormikStepCounter {...props}/>);

        expect(container.firstChild).toMatchSnapshot();
    });
});
