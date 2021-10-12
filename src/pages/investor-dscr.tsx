import React from 'react';
import { MainLayout } from '../layouts';
import {
    SEO,
    FormikWizard,
    InvestorDSCRMarkup,
} from '../components';

const InvestorDSCRPage = (): JSX.Element =>
(
    <MainLayout>
        <SEO title="Manhattan Banc | Investor DSCR"/>
        <FormikWizard/>
        <InvestorDSCRMarkup/>
    </MainLayout>
);

export default InvestorDSCRPage;
