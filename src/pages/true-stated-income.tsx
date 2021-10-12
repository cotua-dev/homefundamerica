import React from 'react';
import { MainLayout } from '../layouts';
import {
    SEO,
    FormikWizard,
    TrueStatedIncomeMarkup,
} from '../components';

const TrueStatedIncomePage = (): JSX.Element =>
(
    <MainLayout>
        <SEO title="Manhattan Banc | True Stated Income"/>
        <FormikWizard/>
        <TrueStatedIncomeMarkup/>
    </MainLayout>
);

export default TrueStatedIncomePage;
