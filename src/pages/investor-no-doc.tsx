import React from 'react';
import { MainLayout } from '../layouts';
import {
    SEO,
    FormikWizard,
    InvestorNoDocMarkup,
} from '../components';

const InvestorNoDocPage = (): JSX.Element =>
(
    <MainLayout>
        <SEO title="Manhattan Banc | Investor No Doc"/>
        <FormikWizard/>
        <InvestorNoDocMarkup/>
    </MainLayout>
);

export default InvestorNoDocPage;
