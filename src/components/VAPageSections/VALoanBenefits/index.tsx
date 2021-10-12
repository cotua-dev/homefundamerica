import React, {
    FunctionComponent,
    ReactElement,
} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import * as styles from './VALoanBenefits.module.scss';
import { Benefit } from './VALoanBenefits.interfaces';

export const VALoanBenefits: FunctionComponent = (): ReactElement => {
    const benefitsSetOne: Benefit[] = [
        {
            key: 0,
            benefit: 'No Money Down',
        },
        {
            key: 1,
            benefit: 'No Mortgage Insurance',
        },
        {
            key: 2,
            benefit: 'Loan Amounts to $1.5 Million',
        },
        {
            key: 3,
            benefit: 'Credit Scores as Low as 500',
        },
        {
            key: 4,
            benefit: 'Competitive Rates',
        },
        {
            key: 5,
            benefit: 'Great Loans for First-Time Homebuyers',
        },
    ];

    return (
        <section id={styles.vaLoanBenefitsSection}>
            <div className={styles.contentWrapper}>
                <h2 className={styles.loanBenefitsTitle}>VA Loan Benefits</h2>
                <p className={styles.content}>
                    {`
                        VA Loans offer unique benefits to eligible veterans and
                        active duty servicemen and women who are looking for:
                    `}
                </p>
                <div className={styles.benefitsWrapper}>
                    <div className={styles.benefits}>
                        {benefitsSetOne.map((benefit: Benefit) => (
                            <div className={styles.benefit} key={benefit.key}>
                                <FontAwesomeIcon className={styles.icon} icon={faCheck}/>
                                <strong>{benefit.benefit}</strong>
                            </div>
                        ))}
                    </div>
                </div>
                <strong className={styles.service}>
                    {`Thank you for your service!`}
                </strong>
            </div>
        </section>
    );
}
