import React from 'react';
import { MainLayout } from '../layouts';
import {
    SEO,
    FormikWizard,
    InvestorBankStatementsMarkup,
} from '../components';

const InvestorBankStatementsPage = (): JSX.Element =>
(
    <MainLayout>
        <SEO title="Manhattan Banc | Investor Bank Statements"/>
        <FormikWizard/>
        <InvestorBankStatementsMarkup/>
    </MainLayout>
);

export default InvestorBankStatementsPage;
