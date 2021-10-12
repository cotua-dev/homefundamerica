import React, {
    ReactElement,
    FunctionComponent,
} from 'react';
import { MainLayout } from '../layouts';
import {
    SEO,
    FormikWizard,
    LoanType,
    ReadyGetStarted,
    IsNonConventionalLoanRight,
    NonConventionalLoanBenefits,
    WhatIsNonConventionalLoan,
} from '../components';

const NonConventionalPage: FunctionComponent = (): ReactElement => (
    <MainLayout>
        <SEO title="Manhattan Banc | Non-Conventional"/>
        <FormikWizard/>
        <LoanType
            title="Non-Conventional Loans"
            content={`
                Flexible options for loan amounts that exceed conforming
                loan amounts and product guidelines. Benefit from low rates,
                competitive closing costs, and our streamlined approach
                on a customized Non-Conventional Loan.
            `}
            learnMore="To learn more about Non-Conventional Loans call"
        />
        <NonConventionalLoanBenefits/>
        <WhatIsNonConventionalLoan/>
        <IsNonConventionalLoanRight/>
        <ReadyGetStarted/>
    </MainLayout>
);

export default NonConventionalPage;
