import React, {
    FunctionComponent,
    ReactElement,
} from 'react';
import { MainLayout } from '../layouts';
import {
    SEO,
    PrivacyPolicy,
} from '../components';

const PrivacyPolicyPage: FunctionComponent = (): ReactElement =>
(
    <MainLayout>
        <SEO title="Manhattan Banc | Privacy Policy"/>
        <PrivacyPolicy/>
    </MainLayout>
);

export default PrivacyPolicyPage;
