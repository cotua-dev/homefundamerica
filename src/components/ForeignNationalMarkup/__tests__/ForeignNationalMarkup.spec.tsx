import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { default as ForeignNationalMarkup } from '..';

describe('ForeignNationalMarkup component', (): void => {
    it('renders', (): void => {
        const { container }: RenderResult = render(<ForeignNationalMarkup/>);

        expect(container.firstChild).toMatchSnapshot();
    });
});
