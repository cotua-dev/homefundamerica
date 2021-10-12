import React, {
    ReactElement,
    FunctionComponent,
} from 'react';
import { MainLayout } from '../layouts';
import {
    SEO,
    FormikWizard,
    LoanType,
    InterestOnlyBenefits,
    WhatIsInterestOnlyLoan,
    ThingsToConsider,
    ReadyGetStarted,
} from '../components';

const InterestOnlyPage: FunctionComponent = (): ReactElement => (
    <MainLayout>
        <SEO title="Manhattan Banc | Interest Only"/>
        <FormikWizard/>
        <LoanType
            title="Interest-Only Mortgage"
            content={`
                Make a principal payment or pay only the interest
                on your loan. It's up to you for the length of the
                interest-only term. Now that's flexibility.
            `}
            learnMore="To learn more about Interest-only Loans, call"
        />
        <InterestOnlyBenefits/>
        <WhatIsInterestOnlyLoan/>
        <ThingsToConsider/>
        <ReadyGetStarted/>
    </MainLayout>
);

export default InterestOnlyPage;
