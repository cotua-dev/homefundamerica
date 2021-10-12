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
    JumboLoanBenefits,
    JumboLoanLeader,
    WhatIsJumboLoan,
} from '../components';

const JumboPage: FunctionComponent = (): ReactElement => (
    <MainLayout>
        <SEO title="Manhattan Banc | Jumbo"/>
        <FormikWizard/>
        <LoanType
            title="Jumbo and Super Jumbo Loans"
            content={`
                Highly competitive interest rates. Flexible terms.
                Tailored options. Loan amounts up to $30 million.
                Jumbo loans can be the right fit when purchasing a
                luxury home or high-priced investment property.
            `}
            learnMore="To learn more about jumbo loans call"
        />
        <JumboLoanBenefits/>
        <WhatIsJumboLoan/>
        <JumboLoanLeader/>
        <ReadyGetStarted/>
    </MainLayout>
);

export default JumboPage;
