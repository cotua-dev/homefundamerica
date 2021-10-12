import React, {
    ReactElement,
    FunctionComponent,
} from 'react';
import { MainLayout } from '../layouts';
import {
    SEO,
    LoanBenefits,
    WhatIsFHALoan,
    IsFHALoanRight,
    ReadyGetStarted,
    FormikWizard,
    LoanType,
} from '../components';

const FHAPage: FunctionComponent = (): ReactElement => (
    <MainLayout>
        <SEO title="Manhattan Banc | FHA"/>
        <FormikWizard/>
        <LoanType
            title="FHA Loans"
            content={`
                Low down-payment options. Flexible qualifications guidelines.
                Low interest rates. Attractive refinance options with high
                loan amounts. FHA loans bring homeownership within reach.
            `}
            learnMore="To learn more about FHA loans call"
        />
        <LoanBenefits/>
        <WhatIsFHALoan/>
        <IsFHALoanRight/>
        <ReadyGetStarted/>
    </MainLayout>
);

export default FHAPage;
