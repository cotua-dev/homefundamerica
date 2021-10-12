import React, {
    ReactElement,
    FunctionComponent,
} from 'react';
import { MainLayout } from '../layouts';
import {
    SEO,
    FormikWizard,
    LoanType,
    PortfolioLoanBenefits,
    PortfolioLoanRecognized,
    ReadyGetStarted,
} from '../components';

const PortfolioPage: FunctionComponent = (): ReactElement => (
    <MainLayout>
        <SEO title="Manhattan Banc | Portfolio"/>
        <FormikWizard/>
        <LoanType
            title="Portfolio Loans"
            content={`
                Greater flexibility. Enhanced program features.
                Custom-built mortgages. Portfolio loans offer
                personalized lending for homebuyers with complex
                financial needs and goals.
            `}
            learnMore="To learn more about portfolio loans call"
        />
        <PortfolioLoanBenefits/>
        <PortfolioLoanRecognized/>
        <ReadyGetStarted/>
    </MainLayout>
);

export default PortfolioPage;
