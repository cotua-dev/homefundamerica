import React, {
    FunctionComponent,
    ReactElement,
} from 'react';
import { whatIsInterestOnlyLoanSection } from './WhatIsInterestOnlyLoan.module.scss';
import * as sharedStyles from '../../sharedStyles/shared.module.scss';

export const WhatIsInterestOnlyLoan: FunctionComponent = (): ReactElement => {
    return (
        <section
            id={whatIsInterestOnlyLoanSection}
            className={sharedStyles.loanPositive}
        >
            <div className={sharedStyles.contentWrapper}>
                <h2>{`What Is an Interest-Only Mortgage?`}</h2>
                <p>
                    {`
                        An Interest-Only Mortgage is a home loan that
                        gives you the option to pay only the interest
                        on the principal amount for a set period of
                        time. After the interest-only term is over,
                        the payment converts to a principal-and-interest
                        payment that is fully amortized over the remaining
                        term of the mortgage.
                    `}
                </p>
                <p>
                    {`
                        Want additional information? After you apply, an
                        experienced Manhattan Banc Mortgage Specialist
                        will review all your options with you.
                    `}
                </p>
            </div>
        </section>
    );
}
