import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { default as NonQMPrograms } from '..';

describe('NonQMPrograms component', (): void => {
    test('renders', (): void => {
        const { container }: RenderResult = render(<NonQMPrograms/>);

        expect(container.firstChild).toMatchSnapshot();
    });
});
