import React, {
    ReactElement,
    FunctionComponent,
} from 'react';
import { MainLayout } from '../layouts';
import {
    SEO,
} from '../components';

const CommercialCannabisPage: FunctionComponent = (): ReactElement => (
    <MainLayout>
        <SEO title="Manhattan Banc | Commercial Cannabis"/>
        <h1>Commercial Cannabis Page</h1>
    </MainLayout>
);

export default CommercialCannabisPage;
