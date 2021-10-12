import React from 'react';
import { MainLayout } from '../layouts';
import {
    SEO,
    FormikWizard,
    ForeignNationalMarkup,
} from '../components';

const ForeignNationalPage = (): JSX.Element =>
(
    <MainLayout>
        <SEO title="Manhattan Banc | Foreign National"/>
        <FormikWizard/>
        <ForeignNationalMarkup/>
    </MainLayout>
);

export default ForeignNationalPage;
