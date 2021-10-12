import React, {
    FunctionComponent,
    ReactElement,
} from 'react';
import {
    useStaticQuery,
    graphql,
} from 'gatsby';
import { whatIsFHALoanSection } from './WhatIsFHALoan.module.scss';
import * as sharedStyles from '../../sharedStyles/shared.module.scss';
import { FetchWhatIsFHALoanImageQuery } from './WhatIsFHALoan.interfaces';

export const WhatIsFHALoan: FunctionComponent = (): ReactElement => {
    const queryResult = useStaticQuery<FetchWhatIsFHALoanImageQuery>(graphql`
        query {
            whatIsFHALoanImage: file(name: {eq: "AdobeStock_130155999"}, extension: {eq: "jpg"}) {
                publicURL
            }
        }
    `);

    return (
        <section
            id={whatIsFHALoanSection}
            className={sharedStyles.loanPositive}
        >
            <div className={sharedStyles.contentWrapper}>
                <h2>{`What is an FHA Loan?`}</h2>
                <p>
                    {`An FHA Loan is a government mortgage insured by the Federal
                    Housing Administration (FHA). FHA Loans offer borrowers relaxed
                    credit requirements and more flexible underwriting guidelines
                    than conventional loans. In additions to purchase loans, refinance
                    programs are available for FHA borrowers, non-FHA borrowers, and
                    homeowners interested cash-out options. Up to 85% of the home's
                    current value can be taken out in cash with a refinance.`}
                </p>
            </div>
            <div className={sharedStyles.imageWrapper}>
                <img
                    src={queryResult?.whatIsFHALoanImage.publicURL}
                    alt="What is an FHA loan image"
                />
            </div>
        </section>
    );
}
