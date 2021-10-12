import React from 'react';
import { MainLayout } from '../layouts';
import {
    SEO,
    FormikWizard,
    StatedIncomeMarkup,
} from '../components';

const StatedIncomePage = (): JSX.Element =>
(
    <MainLayout>
        <SEO title="Manhattan Banc | Stated Income"/>
        <FormikWizard/>
        <StatedIncomeMarkup/>
    </MainLayout>
);

export default StatedIncomePage;
