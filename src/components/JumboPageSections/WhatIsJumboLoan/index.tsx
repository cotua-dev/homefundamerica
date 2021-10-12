import React, {
    FunctionComponent,
    ReactElement,
} from 'react';
import { whatIsJumboLoanSection } from './WhatIsJumboLoan.module.scss';
import * as sharedStyles from '../../sharedStyles/shared.module.scss';

export const WhatIsJumboLoan: FunctionComponent = (): ReactElement => {
    return (
        <section
            id={whatIsJumboLoanSection}
            className={sharedStyles.loanPositive}
        >
            <div className={sharedStyles.contentWrapper}>
                <h2>{`What Are Jumbo and Super Jumbo Loans?`}</h2>
                <p>
                    {`
                        Jumbo and Super Jumbo Loans offer the flexibility of
                        borrowing with less restrictions. They can be used to
                        finance primary residences, second or vacation homes,
                        and investment properties. A Jumbo Loan may also be
                        the right option when refinancing an existing home
                        loan or consolidating multiple mortgages into a single
                        loan.
                    `}
                </p>
                <p>
                    {`
                        A mortgage is generally considered a Jumbo Loan when it
                        exceeds the conforming loan limit, $510,400 in most U.S
                        countries, set by Fannie Mae and Freddie Mac. Super Jumbo
                        Loans usually include mortgage amounts over $1 million.
                    `}
                </p>
            </div>
        </section>
    );
}
