import React, {
    ReactElement,
    FunctionComponent,
} from 'react';
import { MainLayout } from '../layouts';
import {
    SEO,
    FormikWizard,
    LoanType,
    VALoanBenefits,
    WhatIsVALoan,
    IsVALoanRight,
    ReadyGetStarted,
} from '../components';

const VAPage: FunctionComponent = (): ReactElement => (
    <MainLayout>
        <SEO title="Manhattan Banc | VA"/>
        <FormikWizard/>
        <LoanType
            title="VA Loans"
            content={`
                Competitive interest rates. Favorable loan terms.
                No required down payment. VA loan programs help
                eligible veterans and active duty service members
                become homeowners and provide refinance options
                to those with existing mortgages.
            `}
            learnMore="To learn more about VA loans call"
        />
        <VALoanBenefits/>
        <WhatIsVALoan/>
        <IsVALoanRight/>
        <ReadyGetStarted/>
    </MainLayout>
);

export default VAPage;
