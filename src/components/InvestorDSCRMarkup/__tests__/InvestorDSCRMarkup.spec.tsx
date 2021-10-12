import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { default as InvestorDSCRMarkup } from '..';

describe('InvestorDSCRMarkup component', (): void => {
    test('renders', (): void => {
        const { container }: RenderResult = render(<InvestorDSCRMarkup/>);

        expect(container.firstChild).toMatchSnapshot();
    });
});
