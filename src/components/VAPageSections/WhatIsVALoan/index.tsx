import React, {
    FunctionComponent,
    ReactElement,
} from 'react';
import * as styles from './WhatIsVALoan.module.scss';

export const WhatIsVALoan: FunctionComponent = (): ReactElement => {
    return (
        <section id={styles.whatIsVALoanSection}>
            <div className={styles.contentWrapper}>
                <h2 className={styles.title}>{`What Is a VA Loan?`}</h2>
                <p className={styles.content}>
                    {`
                        It's a home loan with no required down payment and
                        favorable loan terms for Active Duty Service members,
                        Veterans, Reservists, National Guard members, surviving
                        spouses, and certain other individuals who meet
                        eligibility requirements can use VA loans to purchase
                        homes or refinance existing mortgages. VA loans are
                        guaranteed by the Department of Veterans Affairs.
                    `}
                </p>
                <p className={styles.content}>
                    {`
                        VA loans are one of the only mortgages to offer 100%
                        financing (no down payment) for a home purchase. In
                        addition, VA loans offer refinance and cash out options
                        that can be used to pay off debt, fund major expenses,
                        make home improvements, or refinance a non-VA home loan
                        into a VA home loan with improved terms.
                    `}
                </p>
                <p className={styles.content}>
                    {`
                        There is also a streamlined option known as an Interest
                        Rate Reduction Refinance Loan (IRRRL) that provides
                        veterans with existing VA loans an opportunity to quickly
                        and easily refinance an existing VA loan. Underwriting
                        terms are very relaxed on an IRRRL an they allow veterans
                        or active duty to quickly and easily pursue a refinance
                        when market conditions improve and interest rates drop.
                    `}
                </p>
            </div>
        </section>
    );
}
