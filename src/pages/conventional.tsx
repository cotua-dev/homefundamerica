import React, {
    ReactElement,
    FunctionComponent,
} from 'react';
import { MainLayout } from '../layouts';
import {
    SEO,
    FormikWizard,
    ReadyGetStarted,
    LoanType,
    ConventionalLoanBenefits,
    WhatIsConventionalLoan,
    IsConventionalLoanRight,
} from '../components';

const ConventionalPage: FunctionComponent = (): ReactElement => (
    <MainLayout>
        <SEO title="Manhattan Banc | Conventional"/>
        <FormikWizard/>
        <LoanType
            title="Conventional Loans"
            content={`
                Low interest rates, fixed and adjustable-rate mortgage
                options, and streamlined approvals. Conventional loans
                are well-suited for first-time homebuyers, seasoned
                purchasers, or homeowners exploring a refinance with
                competitive terms.
            `}
            learnMore="To learn more about Conventional loans call"
        />
        <ConventionalLoanBenefits/>
        <WhatIsConventionalLoan/>
        <IsConventionalLoanRight/>
        <ReadyGetStarted/>
    </MainLayout>
);

export default ConventionalPage;
