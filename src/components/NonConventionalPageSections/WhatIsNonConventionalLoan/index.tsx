import React, {
    FunctionComponent,
    ReactElement,
} from 'react';
import { whatIsNonConventionalLoanSection } from './WhatIsNonConventionalLoan.module.scss';
import * as sharedStyles from '../../sharedStyles/shared.module.scss';

export const WhatIsNonConventionalLoan: FunctionComponent = (): ReactElement => {
    return (
        <section id={whatIsNonConventionalLoanSection} className={sharedStyles.loanPositive}>
            <div className={sharedStyles.contentWrapper}>
                <h2>{`What is a Non-Conventional Loan?`}</h2>
                <p>
                    {`
                        A non-conventional loan is a mortgage that doesn't meet the
                        guidelines for a conventional loan set by Fannie Mae and
                        Freddie Mac. Often a loan is classified as non-conventional
                        because the loan amount exceeds the conventional limit, which
                        is $484,350 in most U.S counties. In addition to higher
                        loan amounts, non-conventional loans from Manhattan Banc can
                        offer expanded down-payment and credit qualification options.
                    `}
                </p>
            </div>
        </section>
    );
}
