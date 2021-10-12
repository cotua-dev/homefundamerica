import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { default as FormikWizard } from '..';

describe('FormikWizard component', (): void => {
    test('renders', (): void => {
        const { container }: RenderResult = render(<FormikWizard/>);

        expect(container.firstChild).toMatchSnapshot();
    });
});
