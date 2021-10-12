import React, {
    FunctionComponent,
    ReactElement,
} from 'react';
import {
    useStaticQuery,
    graphql,
} from 'gatsby';
import { moveToStepper } from '../../../utils/moveToStepper';
import { whatIsConventionalLoanSection } from './WhatIsConventionalLoan.module.scss';
import * as sharedStyles from '../../sharedStyles/shared.module.scss';

export const WhatIsConventionalLoan: FunctionComponent = (): ReactElement => {
    const queryResult = useStaticQuery(graphql`
        query {
            whatIsConventionalLoanImage: file(name: {eq: "AdobeStock_327425317"}, extension: {eq: "jpg"}) {
                publicURL
            }
        }
    `);

    return (
        <section id={whatIsConventionalLoanSection} className={sharedStyles.loanPositive}>
            <div className={sharedStyles.contentWrapper}>
                <h2>{`What is a Conventional Loan?`}</h2>
                <p>
                    {`
                        A conventional loan is a mortgage that follows the guidelines
                        set by Fannie Mae and Freddie Mac. These government-sponsored
                        companies help provide lenders with the money they need to
                        make home loans. Loan size, limited to $484,350 in most U.S.
                        counties, is the most well-known requirement for conventional
                        loans. Loans that don't meet the standards set are called
                        Non-Conventional Loans.
                    `}
                </p>
                <button
                    className={sharedStyles.applyButton}
                    type="button"
                    onClick={moveToStepper}
                >Apply Now</button>
            </div>
            <div className={sharedStyles.imageWrapper}>
                <img
                    src={queryResult?.whatIsConventionalLoanImage.publicURL}
                    alt="What is a conventional loan image"
                />
            </div>
        </section>
    );
}
