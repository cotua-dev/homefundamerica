import React, {
    ReactElement,
    FunctionComponent,
} from 'react';
import { MainLayout } from '../layouts';
import {
    SEO,
} from '../components';

const CommercialPage: FunctionComponent = (): ReactElement => (
    <MainLayout>
        <SEO title="Manhattan Banc | Commercial"/>
        <h1>Commercial Page</h1>
    </MainLayout>
);

export default CommercialPage;
