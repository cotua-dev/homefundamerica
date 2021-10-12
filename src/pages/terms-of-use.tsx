import React from 'react';
import { MainLayout } from '../layouts';
import {
    SEO,
    TermsOfUse,
} from '../components';

const TermsOfUsePage = (): JSX.Element =>
(
    <MainLayout>
        <SEO title="Manhattan Banc | Terms Of Use"/>
        <TermsOfUse/>
    </MainLayout>
);

export default TermsOfUsePage;
