import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { PureSEO as SEO } from '..';
import { PureSEOComponentData } from '../SEO.interfaces';

describe('SEO component', (): void => {
    test('renders', (): void => {
        const props: PureSEOComponentData = {
            lang: '',
            description: '',
            meta: [],
            keywords: [],
            title: '',
            siteUrl: '',
            data: {
                site: {
                    siteMetadata: {
                        title: '',
                        description: '',
                        author: '',
                        siteUrl: '',
                    },
                },
            },
        };
        const { container }: RenderResult = render(<SEO {...props}/>);

        expect(container.firstChild).toMatchSnapshot();
    });
});
