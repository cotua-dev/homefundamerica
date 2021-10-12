import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { default as Dropdown } from '..';
import { Props } from '../Dropdown.interfaces';

describe('Dropdown component', (): void => {
    test('renders', (): void => {
        const props: Props = {
            links: [],
            title: '',
        };
        const { container }: RenderResult = render(<Dropdown {...props}/>);

        expect(container.firstChild).toMatchSnapshot();
    });
});
