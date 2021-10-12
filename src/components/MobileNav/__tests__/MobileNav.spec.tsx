import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { PureMobileNav as MobileNav } from '..';
import { Props } from '../MobileNav.interfaces';

describe('MobileNav component', (): void => {
    test('renders', (): void => {
        const props: Props = { data: { mbancLogo: { publicURL: '' } } };
        const { container }: RenderResult = render(<MobileNav {...props}/>);

        expect(container.firstChild).toMatchSnapshot();
    });
});
